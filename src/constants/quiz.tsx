export type QuestionListType = {
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation: string;
};

export const QuizList = {
  Shinchan1: {
    level: "初級",
    quiz: [
      {
        question: "野原しんのすけの年齢は？",
        choices: ["3歳", "4歳", "5歳", "6歳"],
        correctAnswer: 2,
        explanation: "野原しんのすけは5歳の男の子だゾ！",
      },
      {
        question:
          "ふたば幼稚園の園長先生は、しんのすけからなんと呼ばれている？",
        choices: ["園長", "院長", "総長", "組長"],
        correctAnswer: 3,
        explanation: "野原しんのすけは、園長先生を組長と呼んでいるゾ！",
      },
      {
        question: "しんちゃんがよく行くデパートは？",
        choices: [
          "サトーココノカドー",
          "エトーナノカドー",
          "イトーナノカドー",
          "ムトーヨッカドー",
        ],
        correctAnswer: 0,
        explanation: "野原家がよく行くデパートはサトーココノカドーだゾ！",
      },
      {
        question: `2001年5月11日放送の「突然家が大変だゾ」の回で、野原家は全焼した。その後住んだアパートは？`,
        choices: ["くずれ荘", "またずれ荘", "こわれ荘", "しりずれ荘"],
        correctAnswer: 1,
        explanation: "住んでいたアパートはまたずれ荘だゾ！",
      },
      {
        question: "野原ひろしは双葉商事営業部第2課○長？",
        choices: ["部長", "次長", "課長", "係長"],
        correctAnswer: 3,
        explanation:
          "野原ひろしは係長だゾ！川口がよく「係長〜！」と呼んでいるゾ！",
      },
      {
        question:
          "1996年9月27日放送の「赤ちゃんが生まれたゾ」にて、ひまわりの名前が決められた。決めた方法は？",
        choices: [
          "あみだくじで決めた",
          "紙飛行機に名前を書き、一番長く飛んだものにした",
          "名前を呼び、赤ちゃんが笑った名前にした",
          "線香花火に名前を貼り、一番長く燃えていたものにした",
        ],
        correctAnswer: 1,
        explanation:
          "紙飛行機に名前を書き、一番長く飛んだ「ひまわり」になったゾ！これはしんのすけが考えた名前だゾ！",
      },
      {
        question: "マサオくんの夢は？",
        choices: ["マンガ家", "俳優", "刑事", "脚本家"],
        correctAnswer: 0,
        explanation:
          "マサオくんの夢はマンガ家だゾ！映画「超時空!嵐を呼ぶオラの花嫁」で、未来のマサオくんが描かれたけど、コンビニ店員をやっていたゾ！",
      },
      {
        question: "埼玉紅さそり隊のリーダーは○○竜子？",
        choices: ["くつずれ", "ふかづめ", "かたこり", "へんづつう"],
        correctAnswer: 1,
        explanation:
          "正解はふかづめ竜子だゾ！埼玉紅さそり隊は他にも魚の目お銀とふきでものマリーがいるゾ！",
      },
      {
        question: "ぶりぶりざえもんが腰につけているのは？",
        choices: ["竹刀", "ぺろぺろキャンディー", "木刀", "千歳飴"],
        correctAnswer: 3,
        explanation: "ぶりぶりさえもんは千歳飴を腰につけているゾ！",
      },
      {
        question: "松坂先生は何人姉妹は？",
        choices: ["一人っこ", "2人", "3人", "4人"],
        correctAnswer: 2,
        explanation:
          "松坂先生は3人姉妹だゾ!長女: 松、次女: 竹、三女(松坂先生): 梅 だゾ！",
      },
    ],
  },
};
