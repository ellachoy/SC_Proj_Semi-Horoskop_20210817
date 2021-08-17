console.log("test")

function showMe(){
    let text=document.getElementById("inputText").value 
    document.getElementById("horoscope").style.display="block"
    document.getElementById("someTxt").style.display="none"
    // id=alert('please give a month: January ->Jan, February ->Feb...')

     let months= text;
    switch (months) {
        case ('Jan'):
          
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_aquarius.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is AQUARIUS"
            document.getElementById("horo_text").innerHTML="Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
            break;
        case ('Feb'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_pisces.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is PISCES"
            document.getElementById("horo_text").innerHTML="Communication is very important today—written, spoken, and even nonverbal body language will all…"
            break;    
        case ('Mar'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_aries.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is Aries"
            document.getElementById("horo_text").innerHTML="Today your patience might be tested when one or more of your projects gets put on hold by someone… "
            break;    
        case ('Apr'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_taurus.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is TAURUS"
            document.getElementById("horo_text").innerHTML="Your intense energy makes you a great candidate for a leadership position right now, so if you are…"
            break;    
        
        case ('May'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_taurus.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is GEMINI"
            document.getElementById("horo_text").innerHTML="If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that… "
            break;    
        case ('Jun'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_cancer.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is CANCER"
            document.getElementById("horo_text").innerHTML="Too many different elements in your life are overlapping with each other right now—and it's your…"
            break;    
        case ('Jul'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_leo.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is LEO"
            document.getElementById("horo_text").innerHTML="The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
            break;    
        case ('Aug'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_virgo.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is VIRGO"
            document.getElementById("horo_text").innerHTML="You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
            break;    
        case ('Sep'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_libra.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is LIBRA"
            document.getElementById("horo_text").innerHTML="Pick a cultural event that's coming up and get some tickets for it today."
            break;    
        case ('Oct'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_scorpio.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is SCORPIO"
            document.getElementById("horo_text").innerHTML="Someone will challenge a belief that you've held for a very long time today—and they will say an…"
            break;    
        case ('Nov'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_sagittarius.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is SAGITTARIUS"
            document.getElementById("horo_text").innerHTML="Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
            break;    
        case ('Dec'):
            document.getElementById("horo_img").src= "https://www.horoscopedates.com/img/icon_capricorn.png"
            document.getElementById("horo_title").innerHTML="Your horoscope is CAPRICORN"
            document.getElementById("horo_text").innerHTML="Breaking the rules is not always a bad thing—especially if the rules limit your creativity."
            break;    
    

        default:
            document.getElementById("someTxt").style.display="block"
    
            document.getElementById("someTxt").innerHTML="Please give a month. eg. Jan Feb..."
            document.getElementById("horoscope").style.display="none"
            break;
    }
}   




  