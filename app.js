
let btn = document.querySelector("button");

const API_KEY = "AIzaSyDEqdJvYj27qvwyg3TMIHkTEZ3NEbemNJo";

async function callApi(inp)
{
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
        {
            method : "POST",
            headers : {
                 "Content-Type": "application/json"
            },

            body : JSON.stringify(
                {
                    contents : [
                        {
                            parts:[
                                {text : inp}
                            ]
                        }
                    ]
                }
            ) ,

        }
    );
    return await res.json();
};

btn.addEventListener("click" , async () =>
{
    let inp = document.querySelector("#inp").value; // Text In Input..
    let box = document.querySelector(".chatarea"); // Chat Area

    try {
        let data = await callApi(inp);//API CALL

        let msg2 = document.createElement("p");
        msg2.innerHTML += `You :${inp}`;

        box.appendChild(msg2);

        let msg = document.createElement("p");
        msg.innerHTML = `<b>Bot Reply : ${data.candidates[0].content.parts[0].text}</b>`;//BOT REPLY

        box.appendChild(msg);

    } catch (error) {
        console.log("Errrow Of the API" + error);
    }

    

})

