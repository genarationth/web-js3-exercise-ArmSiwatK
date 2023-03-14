const transactions = [100, 250.75, 50.50, 500.25, 1000];

const monthlyPay = (transactions) => {
    const fee = 3;
    const interest = 0.01;
    let totalPay = 0;

    for (let i = 0; i < transactions.length; i++) {
        const transac = transactions[i];
        const transacFee = fee + (transac * interest);
        totalPay += transacFee;
    }

    return totalPay;
}



const nameInput = (name1, name2, name3) => {
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`)
}

const ageFromYear = (birthYear) => {
    const currentYear = 2023;
    let age = currentYear - birthYear;

    return age;
}

const nameAge = (name1, age1, name2, age2, name3, age3) => {
    console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`)
}



const rubricPass = (rubric) => {
    rubric >= 5;
}

const rubricExcel = (rubric) => {
    rubric > 8 ? console.log("Excellent") : console.log("Not Excellent");
}

const rubricPerfect = (rubric) => {
    rubric == 11 ? console.log("Perfect") : console.log("Not Perfect");
}