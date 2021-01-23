class KeyGenerator{
    constructor(){
        this.SetPrimeNumbers();
        this.SetNAndPhi();
        this.FactorsOfN = [this.P, this.Q];
        this.FactorsOfPhi = GetAllFactorsGreaterThanOne(this.Phi);

        let allFactors = this.FactorsOfN.concat(this.FactorsOfPhi); 
        this.SetEncryptionNumber(this.Phi, allFactors);
        this.SetDecryptionNumber(this.EncryptionNumber, this.Phi);

        this.SetKeys();
    };

    SetPrimeNumbers(){
        let p = 0;
        let q = 0;
        while(p == q){
            p = GetRandomPrimeNumber();
            q = GetRandomPrimeNumber();
        }

        this.P = p;
        this.Q = q;
    }

    SetNAndPhi(){
        this.N = this.P * this.Q;
        this.Phi = (this.P - 1) * (this.Q - 1);
    }

    SetEncryptionNumber(max, factors){
        // 1 < e < max
        // e must have no common factors with n AND phi, which are in "factors"
        // chose a high number (below max). Check it's factors != factors.
        let eIsValid = false;
        let e = 0;

        while(eIsValid == false){
            e = max - getRandomNumberInRange(1,max);
            eIsValid = this.CheckIfEncryptionNumberIsCoprimeWithPhiAndN(e, factors);
        }

        this.EncryptionNumber = e;
    }

    CheckIfEncryptionNumberIsCoprimeWithPhiAndN(e, factors){
        let factorsOfE = GetAllFactorsGreaterThanOne(e);

        if(factors.some(f=>factorsOfE.indexOf(f) >= 0)) {
            return false;
        }
        else {
            return true;
        }
    }
    SetDecryptionNumber(e, phi){
        // Don't get one of the first possible values for Decryption number.
        let iterationsToDo = getRandomNumberInRange(5,15);
        let iterationsDone = 0;

        let possibleDecryptionValues = [];
        let d = 1;

        while(iterationsDone < iterationsToDo) {
            let b = BigInt(e*d);
            if(b % BigInt(phi) == 1n){
                possibleDecryptionValues.push(d);
                iterationsDone++;
            }
            
            d ++;
        }

        d = possibleDecryptionValues[iterationsToDo - 1];

        this.DecryptionNumber = d;
    }

    SetKeys() {
        this.PublicKey = [this.EncryptionNumber, this.N];
        this.PrivateKey = [this.DecryptionNumber, this.N];
    }
}
