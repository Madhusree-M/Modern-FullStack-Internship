enum VoteStatus 
{
    canVote = "VOTE",
    notEligible = "NOT ELIGIBLE"
}

const user = {
    name : "Madhu",
    age:30,
    isEligibleToVote: VoteStatus.canVote
}

// old method
const username = user.name;
const voteStatus = user.isEligibleToVote;

// obj destructuring
const {name,isEligibleToVote} = user;
console.log(`Username is ${name} and vote status is ${isEligibleToVote}`);