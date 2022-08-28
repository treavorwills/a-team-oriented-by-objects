const Engineer = require('../lib/engineer');

describe('engineer', () => {
    const name = 'Turd Ferguson';
    const id = 123;
    const email = 'turd@burtreynolds.com';
    const github = 'turdleyFerg';
    const roomNum = 666;
    const school = 'Hard Knocks';
    const resultEngineer = new Engineer(name, id, email, github);

    it('should return the engineer\'s name', () => {
        expect(resultEngineer.getName()).toBe(name);
    });

    it('should return the engineer\'s id number', () => {
        expect(resultEngineer.getId()).toBe(id);
    });

    it('should return the engineer\'s email ', () => {
        expect(resultEngineer.getEmail()).toBe(email);
    });
    it('should return the engineer\'s role', () => {
        expect(resultEngineer.getRole()).toBe('Engineer');
    });
    it('should return the engineer\'s github', () => {
        expect(resultEngineer.getGithub()).toBe(github);
    });
});