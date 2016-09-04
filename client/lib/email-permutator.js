EmailPermutator = function(fname, lname, domain){

    let spcialChars = ["-",".","_"];
    let email_permutators = [];


    this.addSpecialCharBetweenNames = function(){

        for(let spcialChar of spcialChars) {
            email_permutators.push(fname+spcialChar+lname+"@"+domain);

            email_permutators.push(lname+spcialChar+fname+"@"+domain);
            email_permutators.push(fname.substr(0,1)+spcialChar+lname+"@"+domain);

            email_permutators.push(fname+spcialChar+lname.substr(0,1)+"@"+domain);

            email_permutators.push(fname.substr(0,1)+spcialChar+lname.substr(0,1)+"@"+domain);
        }
           email_permutators.push(fname+lname+"@"+domain);
           email_permutators.push(lname+fname+"@"+domain);
           email_permutators.push(lname+fname.substr(0,1)+"@"+domain);
           email_permutators.push(lname.substr(0,1)+"."+fname.substr(0,1)+"@"+domain);
           email_permutators.push(lname.substr(0,1)+"."+fname+"@"+domain);
           email_permutators.push(lname.substr(0,1)+fname.substr(0,1)+"@"+domain);

    };

    this.addEmailOnlyLnameORfname = function(){
		email_permutators.push(fname+"@"+domain);
		email_permutators.push(lname+"@"+domain);

	};
	this.addEmailByFirstCharCombination = function(){
		email_permutators.push(fname.substr(0,1)+lname+"@"+domain);
		email_permutators.push(fname+lname.substr(0,1)+"@"+domain);
		email_permutators.push(fname.substr(0,1)+lname.substr(0,1)+"@"+domain);

	};

    this.availableEmail = function(){
        return email_permutators;
    }
}
