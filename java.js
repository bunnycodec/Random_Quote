$(document).ready(function(){
               
  function getQuote(){
    
    var quotes= ["We are what we pretend to be, so we must be careful about what we pretend to be.", "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.", "The flower that blooms in adversity is the rarest and most beautiful of all.", "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.", "You never have to change anything you got up in the middle of the night to write.", "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.", "I was never really insane except upon occasions when my heart was touched.", "Pain is temporary. Quitting lasts forever.", "The things you do for yourself are gone when you are gone, but the things you do for others remain as your legacy.", "I dream my painting and I paint my dream.", "Understanding is the first step to acceptance, and only with acceptance can there be recovery.", "What you do makes a difference, and you have to decide what kind of difference you want to make.", "We are only as strong as we are united, as weak as we are divided.", "We cannot choose our fate, but we can choose others. Be careful in knowing that.", "It is the unknown we fear when we look upon death and darkness, nothing more.", "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.", "To the well-organized mind, death is but the next great adventure.", "Happiness can be found even in the darkest of times if only one remembers to turn on the light", "You have power over your mind - not outside events. Realize this, and you will find strength.", "Love is the absence of judgment.",];
    var authors= ["― Kurt Vonnegut Jr.", "― Paulo Coelho", "― Walt Disney Company, Mulan", "― Maya Angelou", "― Saul Bellow", "― Maya Angelou", "― Edgar Allan Poe", "― Lance Armstrong", "― Kalu Ndukwe Kalu", "― Vincent van Gogh", "― J.K. Rowling, Harry Potter and the Goblet of Fire", "― Jane Goodall", "–The Goblet of Fire", " –The Order of the Phoenix", "–The Half-Blood Prince", "― Harry Potter and the Sorcerer’s Stone", "―  Harry Potter and the Sorcerer’s Stone", "– Harry Potter and the Prisoner of Azkaban", "― Marcus Aurelius, Meditations", "― Dalai Lama XIV",];
    
    var randm= Math.floor((Math.random()*quotes.length));
    
    var ranQuote =quotes[randm];
    var ranAuthor =authors[randm];
    
    $(".quote").text(ranQuote);
    $(".author").text(ranAuthor);
    
  }
  
  $(".btn").on("click", function(){ 
      getQuote();
  });
  
});