# employee-tracker-outline

## Description
I had an epiphany where  I realized I can use a markdown file to outline my page. This seems like it'll be a nice way for me to pseudocode. Hopefully this will help me structure a little easier.  
Don't get used to me opining on trying to learn code. Or maybe do.  

### _Storyboard_  
#############################
#### `START`  
`PROMPT`:
- [View All Depts](#`View%20All%20Depts)  
- [View All Roles](#`View%20All%20Roles)  
- [View All Employees](#`View%20All%20Employees)  
- [Add a Dept](#`Add%20a%20Dept)  
- [Add a Role](#Add%20a%20Role)  
- [Add an Employee](#`Add%20an%20Employee)  
- [Update an Employee](#`Update%20an%20Employee) 

#############################

#### `View All Depts`  
##### `TABLE`   
- `dept_name`s
- `dept_id`s  
  
##### PROMPT:  
- [Add a Dept](#`Add%20a%20Dept)
- Home
  
#############################


#### `View All Roles`  
##### `TABLE Roles Data`  
- `job_title`
- `role_id`
- `dept_id[FK]`
- `salary`  
##### `PROMPT`  
- [Add a Role](#Add%20a%20Role)
- Home

#############################


#### `View All Employees`  
##### `TABLE Employee Data`
- `position.id`
- `first_name`  
- `last_name`  
- `job_title`
- `dept_name`
- `salary`
- `manager`
##### `PROMPT`
- [Add an Employee](#`Add%20an%20Employee)
- Home

#############################


#### `Add a Dept`  
##### `PROMPT.data => departments` table
- Enter the `dept_name` 
##### `IF SUCCESS`  
- respond success
- new `department` added to `departments` table
- `dept_id++`
- home  
ELSE CATCH ERROR

#############################


#### `Add a Role`
##### `PROMPT.data => positions` table    
- Enter the `job_title`
- Enter the `salary`
- Enter the `dept_id[FK]`  
##### `IF SUCCESS`  
- respond success 
- new `position` added to `positions` table
- `positions.id++`  
ELSE CATCH ERROR

#############################


#### `Add an Employee` Validator FOR NEW EMPLOYEES
##### `PROMPT.data => employee` table
- `SELECT department => {`  
`}`.then
- Enter `job_title => {`  

<!-- Fourth wall break below -->

      if(true, `ie job_title exists`){
          addAnEmployee()}  
      else {
          addARole().then{addAnEmployee()}
`}`


#############################



#### `Add an Employee`
##### `PROMPT.data => employees` table
- Enter `first_name`
- Enter `last_name`
- Enter `manager{attr: {isNull = allow}}`  
`IF SUCCESS`
- respond success
- new `employee` added to `employees` table  
ELSE CATCH ERROR
##### `PROMPT: Add another employee?`
      if(true){
        addAnEmployee()
      }
      else {
          return `ie app goes home`
      }  

#############################


#### `Update an Employee`
##### `PROMPT.data UPDATES employees` function  
- `SELECT employee FROM employees LIST`
- `SELECT attr to UPDATE`  

        empAttrUpdate(attribute)  => {
          updatedEmpAttr = req.body.attr
        }.then{
            if(success) {
                PROMPT: 'Update another employee?'() {
                    if(true) {
                        updateAnEmployee()
                    }
                    else {
                        return `ie go home`
                    }
                }
            }
            CATCH ERR;
        }

#############################









