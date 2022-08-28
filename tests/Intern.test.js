const Intern = require('../lib/intern');

describe('intern', () => {
    const name = 'Turd Ferguson';
    const id = 123;
    const email = 'turd@burtreynolds.com';
    const github = 'turdleyFerg';
    const roomNum = 666;
    const school = 'Hard Knocks';
    const resultIntern = new Intern(name, id, email, school);

    it('should return the intern\'s name', () => {
        expect(resultIntern.getName()).toBe(name);
    });

    it('should return the intern\'s id number', () => {
        expect(resultIntern.getId()).toBe(id);
    });

    it('should return the intern\'s email ', () => {
        expect(resultIntern.getEmail()).toBe(email);
    });
    it('should return the intern\'s role', () => {
        expect(resultIntern.getRole()).toBe('Intern');
    });
    it('should return the intern\'s school', () => {
        expect(resultIntern.getSchool()).toBe(school);
    });
});