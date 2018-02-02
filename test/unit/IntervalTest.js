describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});

describe("Interval - includes", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(10, 20),
        new Interval(10, 16),
        new Interval(12, 20),
        new Interval(10, 10),
        new Interval(20, 20)

    ].forEach(function (interval) {
        it("should include " + interval.toString() + " in " + testedInterval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(9, 21),
        new Interval(9, 11),
        new Interval(10,21),

    ].forEach(function (interval) {
        it("should not include " + interval.toString() + " in " + testedInterval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});

describe("Interval - union", function () {
    testedInterval = new Interval(10, 20);

    [
        {
           interv : new Interval(8, 12),
           value : new Interval(8,20) 
        },
        {
           interv : new Interval(15, 16),
           value : new Interval(10,20) 
        },
        {
           interv : new Interval(15, 25),
           value : new Interval(10,25) 
        }

    ].forEach(function (interval) {
        it("should return " + interval.value.toString() + "  when " + testedInterval.toString() +"U"+interval.interv.toString(), function () {
            expect(testedInterval.union(interval.interv)).toEqual(interval.value);
        });
    });
    faultyOverlappingInterval = new Interval(8, 9);
    it("should return " + faultyOverlappingInterval.toString() + " and " + testedInterval.toString()+" when "+faultyOverlappingInterval.toString()+"U"+testedInterval.toString(), function () {
            expect(testedInterval.union(faultyOverlappingInterval)).toEqual([testedInterval,faultyOverlappingInterval]);
     });
});
