var express = require('express');
var path = require('path');
var logger = require('tracer').colorConsole();
const knex = require('./../utils/database').knex;
const _ = require('underscore');

/***
	* List of API's
	* jobs - to fetch the jobs based on filter
	* locations - to fetch list of locations
	* jobTypes - to fetch list of Job Types
	* skillSets - to fetch list of skill sets
	* jobFields - to fetch list of Job Fields
	* experiences - to fetch list of experience_level
	* languages - to fetch list of languages
***/

module.exports = function () {

	var router = express.Router();

	/***
	* filters:
			job_type(Availability) - array of ints
			job_field - int
			language -array of ints
			experience - int
			locations - array of ints
			pay_rate - Array of two integer ( min, max)
			searchKeywords - Array of Strings
			skills - array of ints
			
	  page:
	  per_page:
	*/
	router.post('/jobs', function (req, res, next) {

		var data = req.body;
		var page = data.page;
		var per_page = data.per_page;

		if (!page) {
			page = 1;
		}

		if (!per_page) {
			per_page = 30;
		}

		var filters = data.filters;

		if (!filters) {
			filters = {};
		}

		var query = knex.from("jobs")
			.innerJoin('job_type', 'jobs.job_type_id', 'job_type.id')
			.innerJoin('location', 'jobs.location_id', 'location.id')
			.innerJoin('company', 'jobs.company_id', 'company.id')
			.innerJoin('job_field', 'job_field.id', 'jobs.job_field_id')
			.innerJoin('languages', 'languages.id', 'jobs.languages_id')
			.innerJoin('experience_level', 'experience_level.id', 'jobs.experience_id')
			.orderBy('jobs.id', 'asc')
			.where('jobs.id', '<', 1000000000)
			.select('jobs.id', 'jobs.title', 'jobs.job_type_id', 'jobs.company_id',
			'jobs.location_id', 'jobs.pay_rate', 'jobs.reply_rate',
			'job_type.job_type_name', 'location.location_name',
			'company.company_name', 'job_field.job_field_name', 'jobs.job_field_id',
			'job_type.job_type_name', 'jobs.languages_id', 'languages.name as language_name',
			'jobs.experience_id', 'experience_level.experience as experience'
			);


		if (filters.job_type && filters.job_type.length > 0) {
			query = query.andWhere(function () {
				this.whereIn('jobs.job_type_id', filters.job_type);
			});
		}

		if (filters.job_field && filters.job_field > 0) {
			query = query.andWhere('jobs.job_field_id', filters.job_field);
		}

		if (filters.language && filters.language.length > 0) {
			query = query.andWhere(function () {
				this.whereIn('jobs.languages_id', filters.language);
			});
		}

		if (filters.experience && filters.experience > 0) {
			query = query.andWhere('jobs.experience_id', filters.experience);
		}

		if (filters.locations && filters.locations.length > 0) {
			query = query.andWhere(function () {
				this.whereIn('jobs.location_id', filters.locations);
			});
		}

		if (filters.pay_rate && filters.pay_rate.length === 2) {
			query = query.andWhereBetween('jobs.pay_rate', filters.pay_rate);
		}

		if (filters.searchKeywords && filters.searchKeywords.length > 0) {
			query.andWhere(function () {
				filters.searchKeywords.forEach(function (element) {
					this.orWhere(knex.raw('jobs.title LIKE ?', '%' + element + '%'));
				}, this);
			})
		}

		query = query.limit(per_page).offset((page - 1) * per_page);

		if (filters.skills && filters.skills.length > 0) {
			var skills_query = knex.from('jobs_skill_set').select()
				.whereIn('skill_set_id', filters.skills)
				.groupBy('job_id');
			skills_query.then(function (job_skills_res) {
				var job_ids = [];
				_.each(job_skills_res, function (job_skills) {
					job_ids.push(job_skills.job_id);
				})
				query = query.whereIn('jobs.id', job_ids);
				return fetch_jobs_query(query, res);
			});

		} else {

			return fetch_jobs_query(query, res);
		}

	});


	function fetch_jobs_query(query, res) {

		query.then(function (results) {
			var job_ids = _.pluck(results, 'id');

			var skills_query = knex.from('jobs_skill_set')
				.innerJoin('skill_set', 'skill_set.id', 'jobs_skill_set.skill_set_id')
				.select().whereIn('job_id', job_ids);
			var jobs_skills_map = {}
			skills_query.then(function (job_skills_res) {
				_.each(job_skills_res, function (job_skills) {
					if (!jobs_skills_map[job_skills.job_id]) {
						jobs_skills_map[job_skills.job_id] = [];
					}
					var job_id_skill_details = {};
					job_id_skill_details['name'] = job_skills.skill_set_name;
					job_id_skill_details['id'] = job_skills.skill_set_id;
					jobs_skills_map[job_skills.job_id].push(job_id_skill_details);
				})

				_.each(results, function (result) {
					result['skills'] = jobs_skills_map[result.id];
				});


				return res.json({
					'jobs': results
				});
			})
		});
	}


	router.post('/locations', function (req, res, next) {
		var query = knex.from("location").select()
		query.then(function (results) {
			return res.json({
				'locations': results
			});
		});

	});

	router.post('/jobTypes', function (req, res, next) {
		var query = knex.from("job_type").select()
		query.then(function (results) {
			return res.json({
				'job_types': results
			});
		});

	});


	router.post('/skillSets', function (req, res, next) {
		var query = knex.from("skill_set").select()
		query.then(function (results) {
			return res.json({
				'skill_sets': results
			});
		});

	});



	router.post('/jobFields', function (req, res, next) {
		var query = knex.from("job_field").select()
		query.then(function (results) {
			return res.json({
				'job_fields': results
			});
		});

	});

	router.post('/experiences', function (req, res, next) {
		var query = knex.from("experience_level").select()
		query.then(function (results) {
			return res.json({
				'experience_levels': results
			});
		});

	});

	router.post('/languages', function (req, res, next) {
		var query = knex.from("languages").select()
		query.then(function (results) {
			return res.json({
				'languages': results
			});
		});

	});



	// temporary api
	router.route('/datalist')
		.get(function (req, res) {
			var resJson = require('./../testData.json');

			res.json(resJson);
		});


	// fallback
	router.get('*', function (req, res) {
		res.send({ express: 'Hello From Express2' });
	});

	return router;
}