$(document).ready(function () {

    //start chatting = from the landing page to the main page;

    $("#start-chat").on("click",(event)=>{
        event.preventDefault();
        $("#landing,#main-page").slideToggle(100);
    })
    
    //back to the landing page;

    $(".word").on("click",()=>{
        $("#main-page,#landing").slideToggle(100);
    })

    // navigation bar;

    $(".bars").on("click", () => {
	 	$(".nav-container").slideToggle(100);

	});

    $(".nav-container").on("mouseleave", () =>{
        $(".nav-container").hide();
    })
    
    $('.clear-history').on("click",()=>{
        $("#usermsg").empty();
        $(".box").hide();
    })

    $('.exit').on("click",()=>{
        $("#main-page,#landing").slideToggle(100);
    })

     //privacy policy;

     $("#security").on("click",(event)=>{
        event.preventDefault();
        $(".pop.privacy").css({"transform":"scale(1,1)"});
    })

    $("#ok").on("click",(event)=>{
        event.preventDefault();
        $(".pop.privacy").css({"transform":"scale(0,0)"});
    })

    // events after sending a message;

    $("#send").click(function(event){

    event.preventDefault();
    
    // extract time;
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();

    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let monthName = month[date.getMonth()];

    let day = date.getDate().toString();
    let year = date.getFullYear().toString();

    if (date.getMinutes()<10){
        min = '0' + date.getMinutes()};
    let time = day + " " + monthName + " " + year+ " " + hour + ":" + min;
    
    // display user messages;

    let str = $("#usermsg").val();
    if (str != ''){
        let userMsg = "<p class = 'box user'>" + str + "<a id = 'time'>" + time + "</a>" + "<i class='user fas fa-check-double'>"+"</i>"+"</p>";
        $(".menu").append(userMsg);
        $('#usermsg').val('');
        $(".reply.fas.fa-check-double").css("color","rgb(45,96,197)");

        // automatic scroll down;
        $(".menu").scrollTop( $(".menu")[0].scrollHeight);
    

    // generate and display automatic reply messages;

    let reply='';
    function generateReply(str){
        if (/^hi|^hell?o|^hey/.test(str.toLowerCase())) reply = "Hi! I am Nicky. Nice to meet you!:)";
		else if (/test/.test(str.toLowerCase())) reply = "Ok, feel free to test as much as you want.";
        else if (/where are you from|hometown/.test(str.toLowerCase())) reply = "I am from Hong Kong. Where are you from?";
        else if (/how are you|how is it going|how's everything/.test(str.toLowerCase())) reply = "I am good. Thank you for asking.";
		else if (/help|sos|emergency|support/.test(str.toLowerCase())) reply = "I am here to help. What seems to be the problem?";
		else if (/happy|good|nice|cool|like|love/.test(str.toLowerCase())) reply = "Wow, good to hear that!";
		else if (/^how come|^what|^why/.test(str.toLowerCase())) reply = "It must be the weather of England!";
		else if (/^huh+|boring|lame|tired|bad|no|hard|sad|angry/.test(str.toLowerCase())) reply = "I'm sorry you feel that way - what happened?";
		else if (/bye|ciao/.test(str.toLowerCase())) reply = "Ok, bye :)";
        else reply = "Interesting! "
        return reply;
    }

    let replyMsg = "<p class = 'box reply'>" + generateReply(str) + "<a id = 'time'>" + time + "</a>" + "<i class='reply fas fa-check-double'>"+"</p>";
      
        setTimeout(function(){
            $(".menu").append(replyMsg);
            $(".menu").scrollTop( $(".menu")[0].scrollHeight);
            $(".user.fas.fa-check-double").css("color","rgb(45,96,197)");
        }, 1000);
    };

   });
});

