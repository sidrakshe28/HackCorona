var botui = new BotUI("help-bot");

// User Score
let score = 0;

botui.message
  .add({
    delay: 1000,
    loading: true,
    content: "Hi! Welcome to the Corona Detector!"
  })
  .then(function() {
    return botui.message.add({
      delay: 500,
      loading: true,
      content: "We will check the probability of you being corona positive."
    });
  })
  .then(function() {
    return botui.action.button({
      action: [
        {
          text: "Okay! Let's go",
          value: "hours"
        }
      ]
    });
  })
  .then(function(res) {
    let message;

    if (res.value === "hours") {
      message = "That’s a good one! So let's start.";
    }

    return botui.message.add({
      type: "html",
      delay: 500,
      loading: true,
      content: message
    });
  })
  .then(function() {
    botui.message.add({
      type: "html",
      delay: 100,
      loading: true,
      content: "Do you have any trouble in breathing?"
    });

    return botui.action.button({
      action: [
        {
          text: "Yes, I do",
          value: "yes"
        },
        {
          text: "No, I don't",
          value: "no"
        }
      ]
    });
  })
  .then(function(res) {
    let msg;
    if (res.value === "yes") {
      msg = "Oh! Not a good sign.";
      score += 30;
    } else if (res.value === "no") {
      msg = "Okay carry on.";
    }

    return botui.message.add({
      delay: 1000,
      loading: true,
      content: msg
    });
  })
  .then(function() {
    botui.message.add({
      type: "html",
      delay: 100,
      loading: true,
      content: "Do you have fever?"
    });

    return botui.action.button({
      action: [
        {
          text: "Yes, Mild fever",
          value: "mild"
        },
        {
          text: "Yes, High fever",
          value: "high"
        },
        {
          text: "No, I'm fine",
          value: "no"
        }
      ]
    });
  })
  .then(function(res) {
    let msg;
    if (res.value === "mild") {
      msg = "Oh! Take care";
      score += 7;
    } else if (res.value === "high") {
      msg = "Oh! Take Care";
      score += 15;
    } else if (res.value === "no") {
      msg = "Okay carry on.";
    }

    return botui.message.add({
      delay: 1000,
      loading: true,
      content: msg
    });
  })
  .then(function() {
    botui.message.add({
      type: "html",
      delay: 100,
      loading: true,
      content: "Do you have any sort of cough?"
    });

    return botui.action.button({
      action: [
        {
          text: "Yes",
          value: "yes"
        },
        {
          text: "No",
          value: "no"
        }
      ]
    });
  })
  .then(function(res) {
    let msg;
    if (res.value === "yes") {
      msg = "Oh! Take care";
      score += 5;
    } else if (res.value === "no") {
      msg = "Okay, Go ahead! ";
    }

    return botui.message.add({
      delay: 1000,
      loading: true,
      content: msg
    });
  })
  .then(function() {
    botui.message.add({
      type: "html",
      delay: 100,
      loading: true,
      content: "Do you have a running nose?"
    });

    return botui.action.button({
      action: [
        {
          text: "Yes, I do.",
          value: "yes"
        },
        {
          text: "No, I don't",
          value: "no"
        }
      ]
    });
  })
  .then(function(res) {
    let msg;
    if (res.value === "yes") {
      msg = "Okay";
      score += 5;
    } else if (res.value === "no") {
      msg = "Okay, Go ahead! ";
    }

    return botui.message.add({
      delay: 1000,
      loading: true,
      content: msg
    });
  })
  .then(function() {
    botui.message.add({
      type: "html",
      delay: 100,
      loading: true,
      content: "Do you feel fatigue or tiredness?"
    });

    return botui.action.button({
      action: [
        {
          text: "Yes",
          value: "yes"
        },
        {
          text: "No",
          value: "no"
        }
      ]
    });
  })
  .then(function(res) {
    let msg;
    if (res.value === "yes") {
      msg = "Oh! Take care";
      score += 5;
    } else if (res.value === "no") {
      msg = "Okay, Moving forward! ";
    }

    return botui.message.add({
      delay: 1000,
      loading: true,
      content: msg
    });
  })
  .then(function() {
    botui.message.add({
      type: "html",
      delay: 100,
      loading: true,
      content: "Do you have a history of any sort of heart or lung disease?"
    });

    return botui.action.button({
      action: [
        {
          text: "Yes, I had.",
          value: "yes"
        },
        {
          text: "No, Never.",
          value: "no"
        }
      ]
    });
  })
  .then(function(res) {
    let msg;
    if (res.value === "yes") {
      msg = "Okay, you need to take care.";
      score += 10;
    } else if (res.value === "no") {
      msg = "Okay, Go ahead! ";
    }

    return botui.message.add({
      delay: 1000,
      loading: true,
      content: msg
    });
  })
  .then(function() {
    botui.message.add({
      type: "html",
      delay: 100,
      loading: true,
      content: "Do you feel any kind of heaviness in your lungs?"
    });

    return botui.action.button({
      action: [
        {
          text: "Yes, I do.",
          value: "yes"
        },
        {
          text: "No, I don't",
          value: "no"
        }
      ]
    });
  })
  .then(function(res) {
    let msg;
    if (res.value === "yes") {
      msg = "Oh! Take care";
      score += 10;
    } else if (res.value === "no") {
      msg = "Okay, Go ahead! ";
    }

    return botui.message.add({
      delay: 1000,
      loading: true,
      content: msg
    });
  })
  .then(function() {
    botui.message.add({
      type: "html",
      delay: 100,
      loading: true,
      content: "Let's see your result"
    });

    return botui.action.button({
      action: [
        {
          text: "Yes, Show me.",
          value: "yes"
        }
      ]
    });
  })
  .then(() => {
    document.getElementById("result").style.display = "block";
    document.getElementById("help-bot").style.display = "none";
    let perc = (score * 100) / 80;
    let msg = "";

    if (perc >= 75)
      msg =
        "There is a possibility that you may be Corona positive. You urgently need to talk to doctor!";
    else if (perc > 35 && perc < 75)
      msg =
        "There is a slight possibility that you may be Corona positive. You should have a checkup!";
    else if (perc <= 35) msg = "Chill! You are alright. Enjoy!";

    document.getElementById("result").innerHTML = ` 
  <div class="jumbotron" style="font-family: 'Gotu', sans-serif; background-color: #202020; color:white; font-size:28px;font-weight:900;  margin-top:120px; text-align:center;">
  ${msg}<br>
  <a href="./index.html" class="btn btn-danger" style="margin-top:50px;">Go Home</a>
  </div>`;
  });
