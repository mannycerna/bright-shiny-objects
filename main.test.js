const { 
    createUser,
    setAge,
    incrementAge,
    fixCar,
    addGrades,
    getDataType,
    addTodo,
    addSong,
    updateReportCard
} = require('./main.js');

test('createUser', function () {
    expect(createUser('Mesi', 'Kaleziq')).toStrictEqual({
        firstName: 'Mesi',
        lastName: 'Kaleziq'
    });
});

test('setAge', function () {
    const user = { 
        firstName: 'Tim',
        lastName: 'Horton'
    };
    expect(setAge(user, 50)).toStrictEqual({
        firstName: 'Tim',
        lastName: 'Horton',
        age: 50
    });
});

test('incrementAge', function () {
    const user = {
        firstName: 'Tim',
        lastName: 'Horton',
        age: 50
    };
    expect(incrementAge(user)).toStrictEqual({
        firstName: 'Tim',
        lastName: 'Horton',
        age: 51
    })
});

test('fixCar', function () {
    const car = {
        make: 'Ford',
        model: 'Mustang',
        year: 1969,
        needsMaintenance: true
    };
    expect(fixCar(car)).toStrictEqual({
        make: 'Ford',
        model: 'Mustang',
        year: 1969,
        needsMaintenance: false
    });
});

test('addGrades', function () {
    const student = {
        name: 'Anthony DeRosa',
        email: 'anthony.derosa@codeimmersives.com',
        grades: [80, 100, 95]
    };
    const newGrades = [88, 70, 90];
    expect(addGrades(student, newGrades)).toStrictEqual({
        name: 'Anthony DeRosa',
        email: 'anthony.derosa@codeimmersives.com',
        grades: [80, 100, 95, 88, 70, 90]
    });
});

test('getDataType', function () {
    const car = {
        make: 'Ford',
        model: 'Mustang',
        year: 1969,
        needsMaintenance: false
    };
    expect(getDataType(car, 'make')).toBe('string');
    expect(getDataType(car, 'model')).toBe('string');
    expect(getDataType(car, 'year')).toBe('number');
    expect(getDataType(car, 'needsMaintenance')).toBe('boolean');
});

test('addTodo', function () {
    const todos = [
        { 
            title: 'Get gas', 
            isComplete: false },
        { 
            title: 'Buy bread', 
            isComplete: true  
        }
    ];
    const newTodo = {
        title: 'Call mom', 
        isComplete: false
    };
    expect(addTodo(todos, newTodo)).toStrictEqual([
        { 
            title: 'Get gas', 
            isComplete: false 
        },
        { 
            title: 'Buy bread', 
            isComplete: true  
        },
        {
            title: 'Call mom', 
            isComplete: false
        }
    ]);
});

test('addSong', function () {
    const playlist = {
        title: 'My jams',
        duration: 7,
        songs: [
            {
                title: 'Texas Sun',
                artist: 'Khruangbin',
                duration: 4
            },
            {
                title: 'Malamente',
                artist: 'Rosalia',
                duration: 3
            }
        ]
    };
    const newSong = {
        title: 'Old Friends',
        artist: 'Pinegrove',
        duration: 3
    };
    expect(addSong(playlist, newSong)).toStrictEqual({
        title: 'My jams',
        duration: 10,
        songs: [
            {
                title: 'Texas Sun',
                artist: 'Khruangbin',
                duration: 4
            },
            {
                title: 'Malamente',
                artist: 'Rosalia',
                duration: 3
            },
            {
                title: 'Old Friends',
                artist: 'Pinegrove',
                duration: 3
            }
        ]
    });
});

test('updateReportCard', function () {
    let reportCard = {
        lowestGrade: 70,
        highestGrade: 96,
        averageGrade: 82,
        grades: [70, 96, 80]
    };
    expect(updateReportCard(reportCard, 62)).toStrictEqual({
        lowestGrade: 62,
        highestGrade: 96,
        averageGrade: 77,
        grades: [70, 96, 80, 62]
    });
    reportCard = {
        lowestGrade: 70,
        highestGrade: 96,
        averageGrade: 82,
        grades: [70, 96, 80]
    };
    expect(updateReportCard(reportCard, 100)).toStrictEqual({
        lowestGrade: 70,
        highestGrade: 100,
        averageGrade: 86.5,
        grades: [70, 96, 80, 100]
    });
});
