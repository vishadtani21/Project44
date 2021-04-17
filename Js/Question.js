class Question{
    constructor(){
        this.title = createElement('h1'); 
        this.myname = createElement ('h4'); 
        this.mail = createElement ('h4'); 

        this.next_button = createButton ('Next');

        this.welc_title = createElement ('h3'); // welcome



    }

    hide(){
       
        this.title.hide();
        this.myname.hide();
        this.mail.hide(); 
        this.next_button.hide();

        this.welc_title.hide();
        this.name_input.hide();
        this.sub_button.hide();
        this.start_button.hide();
        
        
    }

    display(){
      
    
        this.title.html("Mental Mania");
        this.title.position(280,130);

        this.myname.html("By:- Vishakha Adtani");
        this.myname.position (380,250);

        this.mail.html ("vishadtani21@gmail.com");
        this.mail.position (415,270);
      

        this.next_button.position(630,360);
        this.next_button.mousePressed(()=>{    //next button

            this.next_button.hide();
            this.title.hide();
            this.myname.hide();
            this.mail.hide();
            
           this.name_input = createInput ("Your name please!");
           this.sub_button = createButton ('Submit');
           this.start_button = createButton ('Lets Start!')

            this.welc_title.html("Welcome!")
            this.welc_title.position(350,20);

            this.name_input.position(220,150);  //name
            this.sub_button.position(400,150);  //submit

            this.sub_button.mousePressed(()=>{     //submit wala button
           /* contestant.name = this.name_input.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            */

          });

           /* textSize(20);
            textFont ("Times New Roman");
            fill ("black");
            text ("-->You will have to go through 3 levels",200,70);
            text ("-->Each level will have 3 questions",200,80);
            text ("-->2 points will be incremented for correct answering",200,90);
            text ("-->We will have hints for you if you face any difficulties",200,100);
            text ("-->Takinh hints will decrease you 1 point!",200,110);*/

            this.start_button.position (250,250);
            this.start_button.mousePressed(()=>{   //lets start button

                background(bg1);

            });
            
     
        });

    }
}
