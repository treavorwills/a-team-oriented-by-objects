const Employee = require('../lib/employee');

describe('employee', () => {
    const name = 'Turd Ferguson';
    const id = 123;
    const email = 'turd@burtreynolds.com';
    const github = 'turdleyFerg';
    const roomNum = 666;
    const school = 'Hard Knocks';
    const resultEmployee = new Employee(name, id, email);

    it('should return the employee\'s name', () => {
        expect(resultEmployee.getName()).toBe(name);
    });

    it('should return the employee\'s id number', () => {
        expect(resultEmployee.getId()).toBe(id);
    });

    it('should return the employee\'s email ', () => {
        expect(resultEmployee.getEmail()).toBe(email);
    });
    it('should return the employee\'s role', () => {
        expect(resultEmployee.getRole()).toBe('Employee');
    });
});