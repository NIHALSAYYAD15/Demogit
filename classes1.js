class Employee{
    _name = "";
        constructor(name)
        {
            this._name = name;
        }

        PrintName()
        {
            console.log(this._name);
        }
}

var employee = new Employee("NIHAL");
employee.PrintName();