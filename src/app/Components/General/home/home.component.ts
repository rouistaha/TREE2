import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/data.service';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Container,
  Engine,
} from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // fixed typo from 'styleUrl'
})
export class HomeComponent implements AfterViewInit, OnInit {
  frogX = 100;
  frogY = 100;
  isHopping = false;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  @ViewChild('frogAudio', { static: true }) frogAudioRef!: ElementRef<HTMLAudioElement>;

  public currentIndex = 0;
  public memoryGallery = [
    {
      src: 'assets/memories/1.jpg',
      message: 'First pic i took of u - neklou fl malfouf men hamem linf btw i was gonna say nhebek waqtha khoft hh',
        type: 'image'

    },
    {
      src: 'assets/memories/2.jpg',
      message: 'frigia kenet fl plans mteena k gr aandha modda ama omri makont interested ki qolt enti mara nheb nemchi w naaml more activities ez decision made toul',
        type: 'image'

    },
    {
      src: 'assets/memories/3.mp4',
      message: 'Akther vid wholesome f denya making it official while eating PIZZA 🍕 PERFECT AALKHER',
        type: 'video'

    },
        {
      src: 'assets/memories/4.png',
      message: 'Date hedha cute !!! men lebstk w l convos li aamlnehom waqtha im pretty sure zouz aarafna enou this is it (mzelt khayf maka qeset e sa7ara w entouma temchiw)',
        type: 'image'

    },
    {
      src: 'assets/memories/5.jpg',
      message: 'Yep maadhbek maaya trasitlk khdhit l car khater ena b DACIA w tel mteeik tsaker khrajt naaml f doura khater i was so stressed',
        type: 'image'

    },
    {
      src: 'assets/memories/6.webp',
      message: 'Magical picture - awl taswira baad kelmet "I love you"',
        type: 'image'

    },
    {
      src: 'assets/memories/7.jpg',
      message: 'Famech intro l taswira hedhi - first girl to meet my parents w ekher wahda thank u so much aala khater t7amalt kol chay w jit tzourni',
        type: 'image'

    },
    {
      src: 'assets/memories/8.jpg',
      message: 'Periode dharba u made sure eli oomri manhess rouhi alone nalaabou w naqraw w netfrjou fl aflem maa baadhna perfect girl f situation khayba barcha i love u so much katkouta taqraaa',
        type: 'image'

    },
    {
      src: 'assets/memories/9.jpg',
      message: 'Same period - wqeft maaya barcha w ma bkheltch maaya hata dqiqa',
        type: 'image'

    },
        {
      src: 'assets/memories/10.png',
      message: 'Surprise !!! i had too khater seqi bdet tabra b kelemk w waqftk l hlowin so i had to surprise u',
        type: 'image'

    },
    {
      src: 'assets/memories/11.jpg',
      message: 'First movie date katkoutaaaa ',
        type: 'image'

    },
    {
      src: 'assets/memories/12.jpg',
      message: 'sample men barcha tsawer fl karhba - u made ay blassa noq3dou feha iibara 5 etoiles hotel',
        type: 'image'

    },
        {
      src: 'assets/memories/13.jpeg',
      message: 'Katkouti mraydha waqtha ama u re so cute wlh',
        type: 'image'

    },
    {
      src: 'assets/memories/14.jpg',
      message: 'Oui ga7afthelik maka tsawer khater nhebha barchaa',
        type: 'image'

    },
    {
      src: 'assets/memories/15.jpg',
      message: 'Fav picture tgthr - spontanious barcha w qbalha date lablebi donc cuteee',
        type: 'image'

    },
        {
      src: 'assets/memories/16.jpg',
      message: 'Awl memeber ml aayla naaml maah qahwa hh',
        type: 'image'

    },
    {
      src: 'assets/memories/17.jpg',
      message: 'Date teena taa sidi bousaid tkatkatna barchaaaa ',
        type: 'image'

    },
    {
      src: 'assets/memories/18.jpg',
      message: 'Lena jebtli l bracelet eli l taw lebesha hh zouz klewi tetnamer aalya',
        type: 'image'

    },
        {
      src: 'assets/memories/19.png',
      message: 'AI shih ama cute puisque l ahsen taswira aandi',
        type: 'image'

    },
    {
      src: 'assets/memories/20.jpg',
      message: 'Angel testana f route baad movie date w baadha qahwa maa lou w yass',
        type: 'image'

    },
    {
      src: 'assets/memories/21.jpg',
      message: '9ahwtna f nabel, kol date feha ken cute barcha berasmi i can t explain it ama feha charm ghayr aadi',
        type: 'image'

    },
        {
      src: 'assets/memories/22.jpg',
      message: 'Katkouta tetkatket f carthage wala nassr l taw le naarfou hh ama l burger bnin barcha',
        type: 'image'

    },
    {
      src: 'assets/memories/23.jpg',
      message: 'BUBBLE TEA !!!!',
        type: 'image'

    },
    {
      src: 'assets/memories/24.jpg',
      message: 'ekher movie date aamlneh',
        type: 'image'

    },
        {
      src: 'assets/memories/25.jpg',
      message: 'Oui qaada testana f RAMZI khater thebou',
        type: 'image'

    },
  ];


  public id = 'tsparticles';
  public isPlaying = true;
  public showSecret = false;
  public showTimeline = false;
  public showStoryGame = false;
  public showWheel = false;
  public showCuteMessage = false;
  public particlesOptions = {
  background: {
    color: { value: '#FFF2EB' }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: ClickMode.push },
      onHover: { enable: true, mode: HoverMode.repulse },
      resize: true
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        area: 800
      }
    },
    shape: {
      type: 'image',
      image: {
        src: 'assets/heart.png',
        width: 32,
        height: 32
      }
    },
    size: {
      value: 10,
      random: true
    },
    opacity: {
      value: 0.8
    },
    move: {
      enable: true,
      speed: 1,
      direction:  MoveDirection.bottom,
      outModes: {
        default: OutMode.out
      }
    }
  },
  detectRetina: true
  };


  public timelineMemories = [
    { date: '29 June 2024', text: 'Our very first date 💘 — nervous smiles, gentle laughs, unforgettable vibes.' },
    { date: '08 September 2024', text: 'We made it official 💑 — “It’s us now”, and it felt just right.' },
    { date: '28 September 2024', text: 'First “I love you” 💖 — the moment everything changed forever.' },
  ];


  constructor(public dataService : DataService){

  }
  
  ngOnInit(): void {
    document.addEventListener('click', this.handleFirstInteraction.bind(this), { once: true });
      this.startFrogLoop();

  }

  startFrogLoop() {
  this.moveToNextDestination();
}
moveToNextDestination() {
  const frogWidth = 70;  // adjust to actual frog width
  const frogHeight = 70; // adjust to actual frog height
  const padding = 20;    // prevent frog from touching screen edges

  const maxX = window.innerWidth - frogWidth - padding;
  const maxY = window.innerHeight - frogHeight - padding;

  const targetX = padding + Math.floor(Math.random() * maxX);
  const targetY = padding + Math.floor(Math.random() * maxY);

  const stepSize = 20; // pixels per hop
  const interval = 300; // ms between hops

  const dx = targetX - this.frogX;
  const dy = targetY - this.frogY;
  const distance = Math.hypot(dx, dy);
  const steps = Math.ceil(distance / stepSize);
  const stepX = dx / steps;
  const stepY = dy / steps;

  let currentStep = 0;

  const intervalId = setInterval(() => {
    if (currentStep >= steps) {
      clearInterval(intervalId);
      this.idleHopThenMove();
      return;
    }

    this.frogX += stepX;
    this.frogY += stepY;

    this.triggerHop();
    currentStep++;
  }, interval);
}

idleHopThenMove() {
  let idleCount = 0;
  const idleHops = 5;
  const idleInterval = setInterval(() => {
    this.triggerHop();
    idleCount++;
    if (idleCount >= idleHops) {
      clearInterval(idleInterval);
      this.moveToNextDestination();
    }
  }, 400);
}

triggerHop() {
  this.isHopping = true;
  setTimeout(() => {
    this.isHopping = false;
  }, 300);
}

  handleFirstInteraction() {
  this.audioPlayer.nativeElement.play().catch((err) => {
    console.warn('Autoplay failed:', err);
  });
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }

  ngAfterViewInit(): void {
    const audio = this.audioPlayer.nativeElement;
    audio.volume = 0.3; // 🎵 Set to ~30% volume
    audio.play().catch((err) => {
      console.warn('Autoplay failed:', err);
    });
  }

  toggleMusic() {
    const audio = this.audioPlayer.nativeElement;
    this.isPlaying = !this.isPlaying;
    this.isPlaying ? audio.play() : audio.pause();
  }

  revealSecret() {
    this.resetViews()
    this.showSecret = !this.showSecret;
    const audio = this.audioPlayer.nativeElement;
    audio.volume = 0.3; // 🎵 Set to ~30% volume
    audio.play().catch((err) => {
      console.warn('Autoplay failed:', err);
    });
  }


  get currentMemory() {
    return this.memoryGallery[this.currentIndex];
  }

  nextSlide() {
    if (this.currentIndex < this.memoryGallery.length - 1) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  showTimelineFun() {
    this.resetViews();
    this.showTimeline = !this.showTimeline;
  }

  showStoryGameFun() {
    this.resetViews();
    this.showStoryGame = !this.showStoryGame;
  }

  showWheelFun() {
    this.resetViews();
    this.showWheel = !this.showWheel
  }

  resetViews() {
    this.showSecret = false;
    this.showTimeline = false;
    this.showStoryGame = false;
    this.showWheel = false;
    this.showCuteMessage = false;
  }


    questions = [
    {
      question: 'You see a cute café, do you enter?',
      options: ['Yes, with her 💕', 'No, let’s walk more!'],
    },
    {
      question: 'You find a lost kitten, do you pick it up?',
      options: ['Yes and name it Meowey 🐱', 'No, maybe it has an owner.'],
    },
    {
      question: 'Time for dessert! What do you get?',
      options: ['Ice cream 🍦', 'Chocolate lava cake 🍫'],
    },
  ];
  currentQuestionIndex = 0;
  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  chosenAnswer: string | null = null;

  chooseOption(option: string) {
    this.chosenAnswer = option;
    setTimeout(() => {
      this.chosenAnswer = null;
      this.currentQuestionIndex =
        (this.currentQuestionIndex + 1) % this.questions.length;
    }, 1500);
  }

  openLink(url: string): void {
  window.open(url, '_blank');
  }

  currentCuteMessage = '';

  cuteMessages = [
    "You're my calm in the chaos.",
    "I could talk to you all day and still not have enough time.",
    "Your laugh is my favorite sound.",
    "I don't know how you do it, but you make everything better.",
    "You're the best part of my day, every day.",
    "You make ordinary moments feel special.",
    "I like who I am more when I’m with you.",
    "You make things feel simple, even when they’re not.",
    "Being around you feels like coming home.",
    "Somehow, you just always get me.",
    "You're the kind of person people write songs about.",
    "There’s no one else I’d rather sit in silence with.",
    "Even doing nothing with you feels like something.",
    "You have this quiet way of making everything okay.",
    "You're proof that the little things matter most."
  ];


  generateCuteMessage() {
    const randomIndex = Math.floor(Math.random() * this.cuteMessages.length);
    this.currentCuteMessage = this.cuteMessages[randomIndex];
  }

  showCuteMessageFun() {
    this.resetViews();
    this.showCuteMessage = true;
    this.generateCuteMessage();
  }

  playFrogSound() {
    console.log('hey')
  const audio = this.frogAudioRef.nativeElement;

  // Restart if it's already playing
  audio.currentTime = 0;
  audio.play().catch(err => {
    console.warn('Autoplay failed:', err);
  });
}
}