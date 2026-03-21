let inp = document.querySelector("#inp").value;

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

async function run() {
    try{
       let data = await callApi("Tell me the Five Animal Nmae");
      console.log(data);
    }
    catch(e)
    {
       console.log("Error is " + e);
    }
}

run()

