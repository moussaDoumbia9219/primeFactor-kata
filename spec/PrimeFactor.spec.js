describe('PrimeFactors', () => {    
    it('should calculates if a number is prime or not', function() {


        var primeFactors = function primeFactors(n){
            var result = [];
    for(var divisor = 2; divisor <= n; ++divisor) {
        for (; 0 === n % divisor; n /= divisor) {
            result.push(divisor);
        }
    }
    return result;
        }
        expect(primeFactors(3)).toEqual([3]);
        expect(primeFactors(7)).toEqual([7]);
        
    });
        
});
    