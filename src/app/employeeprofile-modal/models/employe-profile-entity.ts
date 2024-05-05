export class EmployeePersonalDetail  {
    name: string;
    surname: string="";
    gender: string;
    age: number | null = null;
    address: string;
    other_field_1: string;
    other_field_2: string;

    constructor(name: string, surname: string, gender: string, age: number | null, address: string, other_field_1: string, other_field_2: string) {
     this.name = name + surname;
     this.gender = gender;
     this.age = age;
     this.address = address;
     this.other_field_1 = other_field_1;
     this.other_field_2 = other_field_2;
    }

};

export class EmployeeHrmsDetail {
    email:string="";
	department:string="";
	doj?:Date | null = null;
	sick_leaves?:number
};

export class EmployeeMasterDetails {
    id?:string;
    role:string="";
	active:string='';
	type:string="";
	password:string="";
}

export class EmployeeProfileDto {
    empPersonalDetails:EmployeePersonalDetail;
	empHrmsDetails:EmployeeHrmsDetail;
	empMasterDetails:EmployeeMasterDetails;

    constructor(empPersonalDetails:EmployeePersonalDetail, empHrmsDetails:EmployeeHrmsDetail, empMasterDetails:EmployeeMasterDetails) {
        this.empHrmsDetails = empHrmsDetails;
        this.empMasterDetails = empMasterDetails;
        this.empPersonalDetails = empPersonalDetails;
    }
}