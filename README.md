# Hubstaff-Talent React App for Risk-Sense

Please access the website here [Hubstaff-Talent](https://hubstaff-talent-react.herokuapp.com/)

## Component Structure
I have followed the [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) document to create the components for the application. The components are structured in the following way:

* App
  * NavBar
  * JobSearchContent
    * FilterSideBar
      * all the filter components
    * JobResultTable
      * List of JobResultRowCards

## Database
I have used the MySQLDB hosted at [freeMySQLHosting](https://www.freemysqlhosting.net/).
The following tables are created in the database:
* jobs - All the jobs. 
* company - Company table with Id and name.
* experience_level - Experience level table with id and name of the experience level.
* jobs_skill_set - Join table with the skill_set_id for all the jobs.
* job_field - The type of job with id and name.
* job_type - Part-time, Full-time or hourly job.
* languages - Languages table with id and language_name.
* location - Country table id and name.
* skill_set - Skill set table with id and name.

## Functionality
* Currently the Jobs can be searched with all the filters in the FilterSideBar. The API is designed in such a way that only 5 results are returned for every page, and the user can navigate through the pages to get the remaining results. In this way the query will search faster.  
* All the filter options are populated from the date from database.
## Future Implementations
* Currently the sort options is not implemented due to time constraints and will be implemented in future.
* the Feature side bar will be populated with top viewed jobs.
