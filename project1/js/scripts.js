$(document).ready(function(){
 
//images
    
    var peopleArrayL = [ "url(images/left1.svg)", "url(images/left2.svg)", "url(images/left3.svg)", "url(images/left4.svg)", "url(images/left5.svg)","url(images/left6.svg)","url(images/left7.svg)" ] 
    var peopleArrayR = [ "url(images/right1.svg)", "url(images/right2.svg)", "url(images/right3.svg)", "url(images/right4.svg)", "url(images/right5.svg)", "url(images/right6.svg)", "url(images/right7.svg)" ]   
    var resultLeft = peopleArrayL[Math.floor(Math.random()*peopleArrayL.length)]
    var resultRight = peopleArrayR[Math.floor(Math.random()*peopleArrayR.length)]

    $('#left').css('background-image', resultLeft);
    $('#right').css('background-image', resultRight);
    
//first line    
    
        var advice = [ "We fell in love, then fell right out of touch", "Remember when we first met?", "Tellin' each other, We’re the one?", "I remember you and me.", "Oh baby, do you wanna make it better?", "Yeah, meet me at the hotel, motel", "Do you wanna stay together?" ]  
        var adviceResult = advice[Math.floor(Math.random()*advice.length)]

    $('#top1').text(adviceResult);

// second line
    
        var advice2 = [ "Love, is the answer, Johnny", "Everyone is lookin' for love, deep love", "I never had luck with women", "Come on over, there's nobody home","Sweet Trippy, I'm yours for the gettin'","Talkin' foolish at the moon", "You and I will always be","My lady drives me high up the wall"]   
        var adviceResult2 = advice2[Math.floor(Math.random()*advice.length)]

    $('#mid1').text(adviceResult2);

//third line
        var advice3 = [ "Now I'm falling", "You remind me of a love that I once knew", "I found a way to navigate to you", "Something don't feel right","I'll wait for ya by the hotel","I don't need", "You can give me the voodoo", "You're not the only one, girl"]   
        var adviceResult3 = advice3[Math.floor(Math.random()*advice.length)]

    $('#last1').text(adviceResult3);

//fourth line
        var advice4 = [ "Don't leave me revolving", "Please don't lie like the last time", "Hope I swim good, fuck the deal", "It's all nothing, no, no","I keep waiting, smoking, praying","How will we make it out alive?", "Can't get out my head","This is called growin' up, sugar"]   
        var adviceResult4 = advice4[Math.floor(Math.random()*advice.length)]

    $('#top2').text(adviceResult4);

//fifth line
        var advice5 = [ "Don't let me find out the snitch in you", "Couldn't fake it if I wanted to", "Said all we ever need is love, mmm", "Your heart don't stand a chance","Your eyes keep me all in a trance","Don't it feel like it's been far too long, girl?", "The moment is all that we have","You got me missing you and more"]   
        var adviceResult5 = advice5[Math.floor(Math.random()*advice.length)]

    $('#mid2').text(adviceResult5);  

//sixth line
        var advice6 = [ "But where are you mentally?", "I just wanna focus on them lovelies", "They say the heart is underneath", "Open your heart, X spots the mark, baby","Underneath the guarded insecurities","You can get a rapper by Friday", "I couldn't love him more","Let's keep in touch, baby, I got your number saved"]   
        var adviceResult6 = advice6[Math.floor(Math.random()*advice.length)]

    $('#last2').text(adviceResult6); 
    

    
})