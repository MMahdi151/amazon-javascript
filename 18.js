// async function getGreeting() {
//   const response = await fetch("https://supersimplebackend.dev/greeting");
//   const text = await response.text();
//   console.log(text);
// }
// getGreeting();

// async function postGreeting() {
//   const response = await fetch("https://supersimplebackend.dev/greeting", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "Mahdi",
//     }),
//   });
//   const text = await response.text();
//   console.log(text);
// }
// postGreeting();

// e,f
// async function getAmazon() {
//   try {
//     const res = await fetch("https://amazon.com");
//     const t = res.text();
//     console.log(t);
//   } catch (error) {
//     console.log("⚠️ ERROR");
//   }
// }
// getAmazon();

//g

async function postGreeting() {
  try {
    const response = await fetch("https://supersimplebackend.dev/greeting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    });

    if (response.status >= 400) {
      throw response;
    }

    const text = await response.text();
    console.log(text);
  } catch (error) {
    if (error.status === 400) {
      const errorMessage = await error.json();
      console.log(errorMessage);
    } else {
      console.log("Network error. Please try again later.");
    }
  }
}
postGreeting();
