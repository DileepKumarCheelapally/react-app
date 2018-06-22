var express = require('express');
var path = require('path');
var logger = require('tracer').colorConsole();
const knex = require('./../utils/database').knex;
const _ = require('underscore');

module.exports = function() {

	var router = express.Router();

	/***
	* filters:
			job_type - int
			skills - array of ints
			pay_rate - Array of two integer ( min, max)
			locations - array of ints
	  page:
	  per_page:
	*/
    router.post('/fetchJobs', function (req, res, next) {

    	var data = req.body;
    	var page = data.page;
    	var per_page = data.per_page;

    	if (!page) {
    		page = 1;
    	}

    	if (!per_page){
    		per_page = 30;
    	}

    	

    	var filters = data.filters;

    	if (!filters){
    		filters = {};
    	}
    	logger.info(filters);

    	var query = knex.from("jobs")
    					.innerJoin('job_type', 'jobs.job_type_id', 'job_type.id')
    					.innerJoin('location', 'jobs.location_id', 'location.id')
    					.innerJoin('company', 'jobs.company_id', 'company.id')
    					.orderBy('jobs.id', 'asc')
    					.where('jobs.id', '<', 1000000000)
    					.select('jobs.id', 'jobs.title', 'jobs.job_type_id', 'jobs.company_id',
    						'jobs.location_id', 'jobs.pay_rate', 'jobs.reply_rate',
    						'job_type.job_type_name', 'location.location_name', 'company.company_name');



    	if(filters.job_type) {
    		query = query.andWhere('job_type_id', filters.job_type);
    	}

    	logger.info(filters.locations);

    	if(filters.locations) {
    		query = query.andWhere(function() {
    			this.whereIn('location_id', filters.locations);
    		});
    	}

    	if(filters.companies) {
    		query = query.andWhere(function() {
    			this.whereIn('company_id', filters.companies);
    		});
    	}

    	if(filters.pay_rate && filters.pay_rate.length === 2){
    		query = query.andWhereBetween('pay_rate', filters.pay_rate);
    	}

    	if(filters.searchKey){
    		query.andWhere(function(){
    			this.where(knex.raw('title LIKE ?', '%' + filters.searchKey + '%'))
    		})
    	}

    	query = query.limit(per_page).offset((page - 1) * per_page);




    	if(filters.skills){
    		logger.info('here');
    		var skills_query = knex.from('jobs_skill_set').select()
    								.whereIn('skill_set_id', filters.skills)
    								.groupBy('job_id')
    								.limit(per_page).offset((page - 1) * per_page);
    		skills_query.then(function(job_skills_res){
    			var job_ids = [];
    			_.each(job_skills_res, function(job_skills){
    				job_ids.push(job_skills.job_id);
    			})
    			logger.info(job_ids);
    			query = query.whereIn('jobs.id', job_ids);
    			return fetch_jobs_query(query, res);
    		});

    	} else {

    		return fetch_jobs_query(query, res);
	    }

    });


    function fetch_jobs_query(query, res){
	    	query.then(function (results) {
	    		var job_ids = _.pluck(results, 'id');
	    		logger.info(job_ids);

	    		var skills_query = knex.from('jobs_skill_set').select().whereIn('job_id', job_ids);
	    		var jobs_skills_map = {}
	    		skills_query.then(function(job_skills_res){
	    			_.each(job_skills_res, function(job_skills){
	    				if(!jobs_skills_map[job_skills.job_id]){
	    					jobs_skills_map[job_skills.job_id] = [];
	    				}
	    				jobs_skills_map[job_skills.job_id].push(job_skills.skill_set_id);
	    			})

	    			_.each(results, function(result){
	    				result['skills'] = jobs_skills_map[result.id];
	    			});
	    			return res.json({
	    				'jobs': results
	    			});
	    		})
	    	});
    }


    router.post('/fetchLocations', function (req, res, next) {
    	var data = req.body;
    	var page = data.page;
    	var per_page = data.per_page;

    	if (!page) {
    		page = 1;
    	}

    	if (!per_page){
    		per_page = 30;
    	}

    	var filters = data.filters;

    	if (!filters){
    		filters = {};
    	}

    	var query = knex.from("location").select()
    	query = query.limit(per_page).offset((page - 1) * per_page);

    	if(filters.searchKey){
    		query = query.where(knex.raw('location_name LIKE ?', '%' + filters.searchKey + '%'));
    	}

    	query.then(function (results) {
    		return res.json({
    			'locations': results
    		});
    	});

    });


    router.post('/fetchCompanies', function (req, res, next) {
    	var data = req.body;
    	var page = data.page;
    	var per_page = data.per_page;

    	if (!page) {
    		page = 1;
    	}

    	if (!per_page){
    		per_page = 30;
    	}

    	var filters = data.filters;

    	if (!filters){
    		filters = {};
    	}

    	var query = knex.from("company").select()
    	query = query.limit(per_page).offset((page - 1) * per_page);

    	if(filters.searchKey){
    		query = query.where(knex.raw('company_name LIKE ?', '%' + filters.searchKey + '%'));
    	}

    	query.then(function (results) {
    		return res.json({
    			'companies': results
    		});
    	});

    });


    router.post('/fetchJobTypes', function (req, res, next) {
    	var data = req.body;
    	var page = data.page;
    	var per_page = data.per_page;

    	if (!page) {
    		page = 1;
    	}

    	if (!per_page){
    		per_page = 30;
    	}

    	var filters = data.filters;

    	if (!filters){
    		filters = {};
    	}

    	var query = knex.from("job_type").select()
    	query = query.limit(per_page).offset((page - 1) * per_page);

    	if(filters.searchKey){
    		query = query.where(knex.raw('job_type_name LIKE ?', '%' + filters.searchKey + '%'));
    	}

    	query.then(function (results) {
    		return res.json({
    			'job_types': results
    		});
    	});

    });


    router.post('/fetchSkillSets', function (req, res, next) {
    	var data = req.body;
    	var page = data.page;
    	var per_page = data.per_page;

    	if (!page) {
    		page = 1;
    	}

    	if (!per_page){
    		per_page = 30;
    	}

    	var filters = data.filters;

    	if (!filters){
    		filters = {};
    	}

    	var query = knex.from("skill_set").select()
    	query = query.limit(per_page).offset((page - 1) * per_page);

    	if(filters.searchKey){
    		query = query.where(knex.raw('skill_set_name LIKE ?', '%' + filters.searchKey + '%'));
    	}

    	query.then(function (results) {
    		return res.json({
    			'skill_sets': results
    		});
    	});

    });

    



    // temporary api
    router.route('/datalist')
	  .get(function(req,res){
	    var resJson = require('./../testData.json');

	    res.json(resJson);
	  });


	 // fallback
	router.get('*', function(req, res){
	  res.send({ express: 'Hello From Express2' });
	});

    return router;
}