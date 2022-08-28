const Manager = require('../lib/manager');

describe('manager', () => {
    const name = 'Turd Ferguson';
    const id = 123;
    const email = 'turd@burtreynolds.com'
    const github = 'turdleyFerg'
    const roomNum = 666
    const school = 'Hard Knocks';
    const resultEngineer = new Manager(name, id, email, roomNum);

    it('should return the manager\'s name', () => {
        expect(resultEngineer.getName()).toBe(name);
    });

    it('should return the manager\'s id number', () => {
        expect(resultEngineer.getId()).toBe(id);
    });

    it('should return the manager\'s email ', () => {
        expect(resultEngineer.getEmail()).toBe(email);
    });
    it('should return the manager\'s role', () => {
        expect(resultEngineer.getRole()).toBe('Manager');
    });
    it('should return the manager\'s room number', () => {
        expect(resultEngineer.getRoomNum()).toBe(roomNum);
    });
});