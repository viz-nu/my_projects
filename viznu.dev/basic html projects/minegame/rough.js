let winnerdata=[
[    {
        "playerName": "vt",
        "attempts": 1
    },
    {
        "playerName": "viznu",
        "attempts": 1
    }
],
[    {
        "playerName": "saad",
        "attempts": 5
    },
    {
        "playerName": "mo",
        "attempts": 5
    }
],
[   {"playerName": "mo",
    "attempts": 4}
],
[   {"playerName": "prash",
        "attempts": 6}
],
[   {
        "playerName": "hubble",
        "attempts": 7
    }
]
]

winnerdata=winnerdata.flat().sort((a,b)=>a.attempts-b.attempts)
console.log(winnerdata)
const newwinner=[]
let temp=[]
temp.push(winnerdata[0])

for (let i = 1; i < winnerdata.length; i++) {
    if(winnerdata[i].attempts==winnerdata[i-1].attempts){
        temp.push(winnerdata[i])
    }
    else{
        newwinner.push(temp)
        temp=[]
        temp.push(winnerdata[i])
    }
}
newwinner.push(temp)

document.cr


