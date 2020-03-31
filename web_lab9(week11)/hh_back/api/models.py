from django.db import models


class Vacancy(models.Model):
	name = models.CharField(max_length = 200)
	description = models.TextField(default = '')
	salary = models.FloatField()
	company = models.ForeignKey(Company, on_delete = models.CASCADE)

	def to_string(self):
		return "{}: {}".format(self.id, self.name)

	def to_json(self): 
		return {
			'id': self.id,
			'name': self.name,
			'description': self.description,
			'salary': self.salary
		}
