describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should return " + testCase.factorial + " when n = " + testCase.n, function(){
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.factorial(-1);
        }
        expect(f).toThrow('Unable to compute factorial for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.factorial('test');
        }
        expect(f).toThrow('Unable to compute factorial of non integer values');
    })
});

describe('Arrangement' , function(){

    var testCases = [
    {
        n: 0,
        r: 0,
        value: 1
    },
    {
        n: 2,
        r: 2,
        value: 2
    },
    {
        n: 3,
        r: 1,
        value: 3
    },
    {
        n: 4,
        r: 4,
        value: 24
    }];

    testCases.forEach(function(testCase){
        it("should return " + testCase.value + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var result = Util.arrangement(testCase.n, testCase.r);
            expect(result).toEqual(testCase.value);
        })
    });

    it("should raise an exception when r > n", function(){
        var f = function(){
            Util.arrangement( 1 , 2 );
        }
        expect(f).toThrow('Unable to compute arrangement for (n-r) < 0');
    });


    it("should raise an exception when r is not an integer", function(){
        var f = function(){
            Util.arrangement( 1 , 'test' );
        }
        expect(f).toThrow('Unable to compute arrangement of non integer values');
    })
   
});


describe('Combination' , function(){

    var testCases = [
    {
        n: 0,
        r: 0,
        value: 1
    },
    {
        n: 2,
        r: 2,
        value: 1
    },
    {
        n: 4,
        r: 2,
        value: 6
    }];

    testCases.forEach(function(testCase){
        it("should return " + testCase.value + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var result = Util.combination(testCase.n, testCase.r);
            expect(result).toEqual(testCase.value);
        })
    });

});

describe('isPrime' , function(){
  var testCases = [
    {
        n: 1,
        value: false
    },
    {
        n: 2,
        value: true
    },
    {
        n: 3,
        value: true
    },
    {
        n: 4,
        value: false
    },
    {
        n: 5,
        value: true
    },
    {
        n: 6,
        value: false
    }];

    testCases.forEach(function(testCase){
        it("should return " + testCase.value + " when n = " + testCase.n, function(){
            var result = Util.isPrime(testCase.n);
            expect(result).toEqual(testCase.value);
        })
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.isPrime('test');
        }
        expect(f).toThrow('Unable to compute isPrime of non integer values');
    });


    it("should raise an exception when n <= 0", function(){
        var f = function(){
            Util.isPrime(0);
        }
        expect(f).toThrow('Unable to compute isPrime for n <= 0');
    })
});


describe('sumPrime' , function(){
  var testCases = [
    {
        n: 2,
        value: 2
    },
    {
        n: 6,
        value: 10
    },
    {
        n: 8,
        value: 17
    }];

    testCases.forEach(function(testCase){
        it("should return " + testCase.value + " when n = " + testCase.n, function(){
            var result = Util.sumPrime(testCase.n);
            expect(result).toEqual(testCase.value);
        })
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.sumPrime('test');
        }
        expect(f).toThrow('Unable to compute sumPrime of non integer values');
    });


    it("should raise an exception when n < 2", function(){
        var f = function(){
            Util.sumPrime(1);
        }
        expect(f).toThrow('Unable to compute sumPrime for n < 2');
    })
});

describe("FizzBuzz", function(){
    var testCases = [
        {
            n : 1,
            values : [1]
        },
        {
            n : 2,
            values : [1, 2]
        },
        {
            n : 3,
            values : [1, 2, "Fizz"]
        },
        {
            n : 4,
            values : [1, 2, "Fizz", 4]
        },
        {
            n : 15,
            values : [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
        }
    ];

    testCases.forEach(function(testCase){
        it("should return " + testCase.values + " when n = " + testCase.n, function(){
            var result = Util.fizzBuzz(testCase.n);
            expect(result).toEqual(testCase.values);
        })
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.fizzBuzz("test");
        }
        expect(f).toThrow('Unable to compute fizzBuzz of non integer values');
    });

    it("should raise an exception when n < 1",function(){
        var f = function(){
            Util.fizzBuzz(0);
        }
        expect(f).toThrow('Unable to compute fizzBuzz for n < 1');
    });

});

describe("Cipher", function(){

    var testCases = [
    {
        original: 'abcde3',
        ciphered: 'bcdef4'
    },
    {
        original: 'ABCDE',
        ciphered: 'BCDEF'
    },
    {
        original: "Test z test Z",
        ciphered: "Uftu a uftu A"
    },
    {
        original: "Test Unitaire",
        ciphered: "Uftu Vojubjsf"
    }];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.original + " when n = " + testCase.ciphered, function(){
            var cipher = Util.cipher(testCase.original);
            expect(cipher).toEqual(testCase.ciphered);
        });

    });

    it("should return exception when n is not a string",function(){
        var f = function(){
            Util.cipher(3);
        }
        expect(f).toThrow('Unable to compute cipher of non string value');
    });

});