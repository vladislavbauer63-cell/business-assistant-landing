import { motion, useAnimationFrame, useMotionValue, useTransform, type Variants } from 'framer-motion'
import type { MouseEvent } from 'react'
import {
  CheckCircle2,
  Briefcase,
  Sparkles,
  Target,
  Clock3,
  Users,
  Workflow,
  MessageCircle,
  Send,
  Quote,
  Search,
  Filter,
  BadgeCheck,
  type LucideIcon,
} from 'lucide-react'

const shell = 'mx-auto w-full max-w-[1760px] px-6 md:px-10'
const cardBase = 'rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur'

const pains = [
  {
    title: 'Не вывозят темп',
    text: 'Ассистент теряется в объеме задач, срывает сроки и не держит нагрузку предпринимателя.',
  },
  {
    title: 'Ждут указаний на каждый шаг',
    text: 'Вместо правой руки собственник получает сотрудника, которого нужно постоянно направлять и контролировать.',
  },
  {
    title: 'Высокие ожидания - слабые навыки',
    text: 'Запрос по зарплате высокий, а по факту нет системности, аналитики, проектного мышления и зрелой ответственности.',
  },
  {
    title: 'Совмещают несколько проектов',
    text: 'Из-за распыления страдает вовлеченность, качество работы и реальная поддержка бизнеса.',
  },
]

const founderSituation = [
  'Все ключевые задачи были завязаны на собственнике.',
  'День уходил на сообщения, встречи и ручной контроль.',
  'Команда ждала включения даже в простых вопросах.',
  'На развитие и стратегию почти не оставалось ресурса.',
  'Поиск ассистента раньше не давал нужного результата.',
]

const founderActions = [
  'Календарь, коммуникации и контроль задач ушли с собственника.',
  'Встречи, договоренности и дедлайны стали держаться без сбоев.',
  'Операционка перестала тормозить рост бизнеса.',
  'Появилось время на стратегию, партнерства и развитие.',
  'Вместо ручного режима в бизнесе появился порядок.',
]

const approach = [
  {
    title: 'Подбор под реальные бизнес-задачи',
    text: 'Ищем не исполнителей поручений, а людей, которые умеют держать процессы, проекты и зону ответственности.',
  },
  {
    title: 'Оцениваем мышление и зрелость',
    text: 'Смотрим, как кандидат думает, принимает решения, структурирует хаос и работает в логике бизнеса.',
  },
  {
    title: 'Уровень правой руки',
    text: 'Подбираем ассистентов, которые могут вести запуск, координацию команды, контроль дедлайнов и операционный блок.',
  },
]

const compare = [
  {
    weak: 'Ведет календарь и ждет указаний',
    strong: 'Держит задачи, процессы и помогает собственнику двигаться быстрее',
  },
  {
    weak: 'Реагирует только на входящие поручения',
    strong: 'Думает на шаг вперед и предупреждает узкие места',
  },
  {
    weak: 'Не выдерживает многозадачность',
    strong: 'Собирает хаос в систему и контролирует исполнение',
  },
  {
    weak: 'Закрывает бытовые мелочи',
    strong: 'Может взять на себя проект, запуск и часть операционки',
  },
]

const candidates = [
  {
    name: 'Екатерина',
    age: '24 года',
    role: 'Операционный ассистент с опытом работы с предпринимателями',
    experience:
      'Работала в высоком темпе с собственниками и держала плотный календарь без хаоса и потери follow-up.',
    strengths: [
      'Умеет работать с предпринимателями',
      'Управляет календарем',
      'Организовывает поездки',
      'Координирует встречи',
      'Работает с подрядчиками',
    ],
    fit: 'Подойдет, если нужен человек, который спокойно держит личный и операционный контур руководителя.',
  },
  {
    name: 'Алексей',
    age: '26 лет',
    role: 'Бизнес-ассистент с фокусом на операционное управление',
    experience:
      'Системная работа с задачами, дедлайнами и исполнением без постоянного ручного контроля со стороны собственника.',
    strengths: [
      'Контроль задач и дедлайнов',
      'Выстраивание процессов',
      'Таблицы и аналитика',
      'Коммуникация с командой',
      'Операционная дисциплина',
    ],
    fit: 'Подойдет, если нужен человек, который быстро наведет порядок в процессах и возьмет на себя контур контроля.',
  },
  {
    name: 'Василий',
    age: '26 лет',
    role: 'Бизнес-ассистент / Project support',
    experience:
      'E-commerce, онлайн-сервис, операционная поддержка собственника, координация команды и контроль задач.',
    strengths: ['Таблицы и отчеты', 'Координация команды', 'Контроль дедлайнов', 'Подрядчики и процессы'],
    fit: 'Подойдет, если нужен человек, который возьмет под контроль проектный и операционный блок.',
  },
]

const audience = [
  'Собственникам, у которых все завязано на них',
  'Предпринимателям, которые уже ошибались в найме ассистента',
  'Компаниям, где не хватает сильной правой руки',
  'Тем, кто ищет человека в долгую, а не случайного исполнителя',
]

const resultCards = [
  {
    title: 'Освобождение времени',
    text: 'Собственник перестает держать на себе весь операционный контур.',
  },
  {
    title: 'Порядок в процессах',
    text: 'Задачи, дедлайны и коммуникации перестают жить в хаосе.',
  },
  {
    title: 'Усиление, а не нагрузка',
    text: 'Появляется человек, который поддерживает, а не требует постоянного контроля.',
  },
  {
    title: 'Поддержка роста',
    text: 'В компании появляется ресурс на развитие без ручного режима.',
  },
]

const process = [
  {
    icon: Search,
    title: 'Кандидаты за 7-14 дней',
    text: 'Подбираем 2-3 сильных бизнес-ассистента под ваш формат бизнеса, уровень задач и стиль управления.',
  },
  {
    icon: Filter,
    title: '4 этапа оценки',
    text: 'Резюме, интервью, проверка на системность, ответственность и финальный shortlist без случайных откликов.',
  },
  {
    icon: BadgeCheck,
    title: 'Гарантия',
    text: 'Если после выхода кандидат не подходит, предусматриваем замену в согласованный гарантийный период.',
  },
]

const principles = [
  'Не отправляем десятки резюме ради видимости работы.',
  'Показываем только 2-3 релевантных кандидата под ваш темп и задачи.',
  'Сначала помогаем понять, кто вам реально нужен: ассистент, операционный помощник или правая рука.',
  'Если кандидат не подходит после выхода - предусматриваем замену.',
]

const testimonials = [
  {
    name: 'Екатерина',
    company: 'АО «Сбербанк-Технологии»',
    text: 'Искали человека, который не просто поможет по мелочам, а реально снимет часть нагрузки. В итоге получили ассистента, который держит встречи, follow-up и коммуникацию без постоянных напоминаний.',
  },
  {
    name: 'Алексей',
    company: 'Positive Technologies',
    text: 'Нужен был не секретарь, а человек, который умеет держать сроки и процессы. Вышли на сильного ассистента, который быстро встроился и навел порядок в потоке задач.',
  },
  {
    name: 'Марина',
    company: 'Сервисный бизнес',
    text: 'До этого уже был неудачный опыт найма, поэтому шли аккуратно. Здесь понравилось, что показали не поток резюме, а несколько очень точных кандидатов, из которых реально можно выбирать.',
  },
  {
    name: 'Игорь',
    company: 'Онлайн-проект',
    text: 'После выхода ассистента стало заметно легче: меньше ручного контроля, меньше потерь по договоренностям, больше времени на развитие. Это именно та правая рука, которую и хотелось найти.',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

type SectionTitleProps = {
  badge: string
  title: string
  text?: string
  icon?: LucideIcon
}

function SectionTitle({
  badge,
  title,
  text,
  icon: Icon = Sparkles,
}: SectionTitleProps) {
  return (
    <motion.div variants={fadeUp} className="w-full">
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.24em] text-violet-200/90 backdrop-blur">
        <Icon className="h-4 w-4" />
        {badge}
      </div>
      <h2 className="w-full text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 w-full text-lg leading-8 text-zinc-300 md:text-xl">
          {text}
        </p>
      ) : null}
    </motion.div>
  )
}

function AnimatedSmoke() {
  const t = useMotionValue(0)

  useAnimationFrame((time: number) => {
    t.set(time / 1000)
  })

  const x1 = useTransform(t, (v: number) => Math.sin(v * 1.3) * 140 + Math.cos(v * 0.7) * 40)
  const y1 = useTransform(t, (v: number) => Math.cos(v * 1.1) * 90 + Math.sin(v * 0.5) * 35)
  const s1 = useTransform(t, (v: number) => 1 + Math.sin(v * 1.2) * 0.12)
  const r1 = useTransform(t, (v: number) => Math.sin(v * 0.9) * 10)

  const x2 = useTransform(t, (v: number) => Math.cos(v * 1.5) * -130 + Math.sin(v * 0.8) * 55)
  const y2 = useTransform(t, (v: number) => Math.sin(v * 1.25) * 110 + Math.cos(v * 0.6) * 30)
  const s2 = useTransform(t, (v: number) => 1 + Math.cos(v * 1.35) * 0.13)
  const r2 = useTransform(t, (v: number) => Math.cos(v * 1.1) * -12)

  const x3 = useTransform(t, (v: number) => Math.sin(v * 1.05) * 115 + Math.cos(v * 0.45) * 50)
  const y3 = useTransform(t, (v: number) => Math.cos(v * 1.4) * -85 + Math.sin(v * 0.75) * 45)
  const s3 = useTransform(t, (v: number) => 1 + Math.sin(v * 0.95) * 0.1)
  const r3 = useTransform(t, (v: number) => Math.sin(v * 1.25) * 11)

  const x4 = useTransform(t, (v: number) => Math.cos(v * 1.8) * -95 + Math.sin(v * 0.9) * 60)
  const y4 = useTransform(t, (v: number) => Math.sin(v * 1.55) * 75 + Math.cos(v * 0.5) * 25)
  const s4 = useTransform(t, (v: number) => 1 + Math.cos(v * 1.6) * 0.14)
  const r4 = useTransform(t, (v: number) => Math.cos(v * 1.3) * -9)

  const overlayOpacity = useTransform(t, (v: number) => 0.82 + ((Math.sin(v * 1.7) + 1) / 2) * 0.18)

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05030a]">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#06030a,#0a0612_45%,#05030a)]" />

      <motion.div
        className="absolute -left-32 -top-24 h-[42rem] w-[42rem] rounded-full"
        style={{
          x: x1,
          y: y1,
          scale: s1,
          rotate: r1,
          background:
            'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0.2) 34%, rgba(139,92,246,0) 72%)',
          filter: 'blur(46px)',
        }}
      />

      <motion.div
        className="absolute right-[-10rem] top-[4%] h-[38rem] w-[38rem] rounded-full"
        style={{
          x: x2,
          y: y2,
          scale: s2,
          rotate: r2,
          background:
            'radial-gradient(circle, rgba(217,70,239,0.34) 0%, rgba(217,70,239,0.18) 36%, rgba(217,70,239,0) 72%)',
          filter: 'blur(50px)',
        }}
      />

      <motion.div
        className="absolute bottom-[-12rem] left-[16%] h-[44rem] w-[44rem] rounded-full"
        style={{
          x: x3,
          y: y3,
          scale: s3,
          rotate: r3,
          background:
            'radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0.14) 38%, rgba(124,58,237,0) 74%)',
          filter: 'blur(54px)',
        }}
      />

      <motion.div
        className="absolute left-[34%] top-[18%] h-[26rem] w-[26rem] rounded-full"
        style={{
          x: x4,
          y: y4,
          scale: s4,
          rotate: r4,
          background:
            'radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(168,85,247,0.12) 34%, rgba(168,85,247,0) 72%)',
          filter: 'blur(42px)',
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          opacity: overlayOpacity,
          background:
            'radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.12),transparent_28%), radial-gradient(circle_at_80%_30%,rgba(192,38,211,0.1),transparent_24%), radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.1),transparent_28%)',
        }}
      />
    </div>
  )
}

function PlaceholderPhoto({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_45%)]" />
      <div className="relative flex aspect-[4/5] items-end rounded-[1.5rem] border border-dashed border-violet-300/20 bg-black/20 p-6">
        <div>
          <div className="text-sm uppercase tracking-[0.22em] text-violet-200/80">Фото-зона</div>
          <div className="mt-3 text-base leading-7 text-zinc-300">{label}</div>
        </div>
      </div>
    </div>
  )
}

export default function BusinessAssistantLanding() {
  const scrollToSection =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

  return (
    <>
      <AnimatedSmoke />

      <div className="relative z-10 min-h-screen overflow-x-hidden text-white">
        <header className="sticky top-0 z-40 border-b border-white/5 bg-[#05030a]/70 backdrop-blur-xl">
          <div className={`${shell} flex items-center justify-between py-5`}>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 shadow-[0_0_24px_rgba(139,92,246,0.18)]">
                <Briefcase className="h-6 w-6 text-violet-200" />
              </div>
              <div>
                <div className="text-base font-medium tracking-wide text-white">Right Hand Search</div>
                <div className="text-sm text-zinc-400">Подбор бизнес-ассистентов</div>
              </div>
            </div>

            <a
              href="#cta"
              onClick={scrollToSection('cta')}
              className="inline-flex items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 px-7 py-4 text-base font-medium text-violet-100 transition hover:border-violet-300/50 hover:bg-violet-500/20"
            >
              Обсудить задачу
            </a>
          </div>
        </header>

        <main>
          <section className={`${shell} relative pb-20 pt-20 md:pb-28 md:pt-28`}>
  <div className="grid min-h-[calc(100vh-110px)] items-center gap-12 xl:grid-cols-2">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="mx-auto w-full max-w-[760px]"
    >
      <motion.div
        variants={fadeUp}
        className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.24em] text-violet-200/90 backdrop-blur"
      >
        <Sparkles className="h-4 w-4" />
        Ассистенты для бизнеса
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-6xl xl:text-[4.1rem]"
      >
        Подбираем бизнес-ассистентов, которые становятся{' '}
        <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-violet-400 bg-clip-text text-transparent">
          правой рукой предпринимателя
        </span>
        , а не еще одним сотрудником под контроль
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-8 text-lg leading-8 text-zinc-300 md:text-xl"
      >
        Более 2 лет ищем сильных ассистентов под реальные бизнес-задачи:
        управление проектами, контроль процессов, координация команды,
        поддержка собственника в росте компании.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#candidates"
          onClick={scrollToSection('candidates')}
          className="inline-flex min-h-[76px] items-center justify-center rounded-[1.6rem] bg-white px-10 py-5 text-lg font-semibold text-zinc-900 transition hover:translate-y-[-1px] sm:flex-1"
        >
          Посмотреть кандидатов
        </a>

        <a
          href="#cta"
          onClick={scrollToSection('cta')}
          className="inline-flex min-h-[76px] items-center justify-center rounded-[1.6rem] border border-white/10 bg-white/5 px-10 py-5 text-lg font-semibold text-white transition hover:border-violet-300/30 hover:bg-violet-500/10 sm:flex-1"
        >
          Получить подборку
        </a>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { value: '2+ года', label: 'в подборе ассистентов' },
          { value: '300+', label: 'сильных ассистентов' },
          { value: 'Экономия', label: 'времени собственника' },
        ].map((item) => (
          <div key={item.label} className={`${cardBase} p-6`}>
            <div className="text-3xl font-semibold text-white">{item.value}</div>
            <div className="mt-2 text-base leading-6 text-zinc-400">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
      className="relative mx-auto w-full max-w-[760px]"
    >
      <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-br from-violet-500/15 via-fuchsia-500/5 to-transparent blur-2xl" />

      <div className={`${cardBase} relative overflow-hidden p-10 shadow-2xl xl:p-12`}>
        <div className="flex items-center justify-between border-b border-white/10 pb-7">
          <div>
            <div className="text-lg text-zinc-400">Что вы ищете на самом деле</div>
            <div className="mt-2 text-4xl font-semibold leading-tight">Не помощника, а правую руку</div>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10">
            <Users className="h-7 w-7 text-violet-200" />
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {[
            'Самостоятельность и зрелое мышление',
            'Навык держать хаос, сроки и коммуникации',
            'Умение брать на себя проектную и операционную нагрузку',
            'Умение работать в логике бизнеса и принимать решения без постоянных указаний',
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-[1.4rem] border border-white/15 bg-black/20 px-6 py-5"
            >
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-violet-300" />
              <p className="text-lg leading-8 text-zinc-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.6rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-transparent p-7">
          <div className="text-lg text-violet-200">Ключевая мысль</div>
          <p className="mt-3 text-lg leading-8 text-zinc-200">
            Мы не про ассистентов, которые заказывают билеты. Мы про людей,
            которые могут возглавить задачу, собрать процесс и разгрузить
            собственника по-настоящему.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

          <section className={`${shell} py-24`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <SectionTitle
                badge="Почему это важно"
                title="Когда бизнесу действительно нужна сильная правая рука"
                text="Когда собственник держит на себе задачи, встречи, контроль команды и поток срочных вопросов, бизнес начинает упираться в его личный ресурс. В этот момент сильный бизнес-ассистент становится не удобством, а реальной точкой опоры."
              />

              <div className="mt-14 grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
                <motion.div variants={fadeUp}>
                  <PlaceholderPhoto label="Фото предпринимателя в работе, на выступлении или в переговорах" />
                </motion.div>

                <motion.div variants={stagger} className="grid gap-8 lg:grid-cols-2">
                  <motion.div variants={fadeUp} className={`${cardBase} p-7`}>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-5 py-3 text-sm uppercase tracking-[0.2em] text-red-200">
                      До ассистента
                    </div>

                    <div className="space-y-4">
                      {founderSituation.map((item) => (
                        <div key={item} className="flex items-start gap-4 rounded-[1.4rem] border border-white/8 bg-black/20 p-5">
                          <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
                          <p className="text-base leading-7 text-zinc-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} className={`${cardBase} p-7`}>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-3 text-sm uppercase tracking-[0.2em] text-emerald-200">
                      После выхода
                    </div>

                    <div className="space-y-4">
                      {founderActions.map((item) => (
                        <div key={item} className="flex items-start gap-4 rounded-[1.4rem] border border-white/8 bg-black/20 p-5">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                          <p className="text-base leading-7 text-zinc-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          <section className={`${shell} py-24`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <SectionTitle
                badge="Боль рынка"
                title="Почему предприниматели устают от рынка ассистентов"
                text="Часто проблема не в самой позиции, а в том, что на нее приходят люди, которые не соответствуют уровню задач бизнеса."
                icon={Clock3}
              />

              <motion.div variants={stagger} className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {pains.map((item) => (
                  <motion.div key={item.title} variants={fadeUp} className={`${cardBase} p-8`}>
                    <h3 className="text-[2.2rem] font-semibold leading-tight text-white lg:text-[2.35rem]">{item.title}</h3>
                    <p className="mt-6 text-xl leading-9 text-zinc-400">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          <section className={`${shell} py-24`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <SectionTitle
                badge="Наш подход"
                title="Мы ищем не бытового помощника, а сильного бизнес-ассистента"
                text="Подбираем людей, которые способны стать для собственника опорой"
                icon={Target}
              />

              <motion.div variants={stagger} className="mt-14 grid gap-8 lg:grid-cols-3">
                {approach.map((item) => (
                  <motion.div key={item.title} variants={fadeUp} className={`${cardBase} p-8`}>
                    <h3 className="text-[2.2rem] font-semibold leading-tight text-white lg:text-[2.35rem]">{item.title}</h3>
                    <p className="mt-6 text-xl leading-9 text-zinc-400">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          <section className={`${shell} py-24`} id="candidates">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <SectionTitle
                badge="Кого вы получаете"
                title="Не поток резюме, а уже отобранных и понятных кандидатов"
                icon={Users}
              />

              <motion.div variants={stagger} className="mt-14 grid gap-8 xl:grid-cols-3">
                {candidates.map((candidate, index) => (
                  <motion.div
                    key={candidate.name}
                    variants={fadeUp}
                    className={`${cardBase} group p-7 transition hover:border-violet-300/25 hover:bg-white/[0.06]`}
                  >
                    <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-white/8 bg-black/20 p-4">
                      <div className="flex aspect-[4/3] items-end rounded-[1.15rem] border border-dashed border-violet-300/20 bg-gradient-to-br from-violet-500/10 to-transparent p-5">
                        <div>
                          <div className="text-sm uppercase tracking-[0.22em] text-violet-200/80">Фото кандидата</div>
                          <div className="mt-3 text-base text-zinc-400">Заменить на реальную фотографию кандидата #{index + 1}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-4xl font-semibold text-white">{candidate.name}</div>
                      <div className="mt-2 text-base text-zinc-400">{candidate.age}</div>
                    </div>

                    <div className="mt-5 text-base font-medium text-violet-200">{candidate.role}</div>

                    <div className="mt-7 rounded-[1.4rem] border border-white/8 bg-black/20 p-5 text-base leading-7 text-zinc-300">
                      <span className="text-zinc-500">Опыт:</span> {candidate.experience}
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {candidate.strengths.map((strength, strengthIndex) => {
                        const isLastOdd =
                          candidate.strengths.length % 2 === 1 && strengthIndex === candidate.strengths.length - 1

                        return (
                          <span
                            key={strength}
                            className={`rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-center text-sm text-zinc-200 ${
                              isLastOdd ? 'col-span-2' : ''
                            }`}
                          >
                            {strength}
                          </span>
                        )
                      })}
                    </div>

                    <div className="mt-7 rounded-[1.4rem] border border-violet-400/15 bg-gradient-to-br from-violet-500/10 to-transparent p-5 text-base leading-7 text-zinc-200">
                      {candidate.fit}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          <section className={`${shell} py-24`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <SectionTitle
                badge="Кто вам нужен на самом деле"
                title="Обычный ассистент и сильная правая рука - это разные роли"
                text="Именно это различие чаще всего определяет, станет ли найм усилением бизнеса или еще одной точкой контроля для собственника."
                icon={Workflow}
              />

              <motion.div variants={fadeUp} className={`${cardBase} mt-14 overflow-hidden`}>
                <div className="grid border-b border-white/10 bg-white/[0.03] md:grid-cols-2">
                  <div className="flex items-center justify-center px-7 py-6 text-center text-base font-semibold uppercase tracking-[0.2em] text-zinc-400">
  Обычный ассистент
</div>
<div className="border-t border-white/10 flex items-center justify-center px-7 py-6 text-center text-base font-semibold uppercase tracking-[0.2em] text-violet-200 md:border-l md:border-t-0">
  Сильный бизнес-ассистент
</div>
                </div>

                {compare.map((row, idx) => (
                  <div key={idx} className="grid md:grid-cols-2">
                    <div className="border-b border-white/10 flex items-center justify-center px-7 py-6 text-center text-base leading-8 text-zinc-400 md:border-r">
  {row.weak}
</div>
<div className="border-b border-white/10 flex items-center justify-center px-7 py-6 text-center text-base leading-8 text-zinc-200">
  {row.strong}
</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          <section className={`${shell} py-24`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <SectionTitle badge="Как мы работаем" title="Понятный процесс без десятков случайных резюме" icon={Search} />

              <motion.div variants={stagger} className="mt-14 grid gap-8 lg:grid-cols-3">
                {process.map((item) => {
                  const Icon = item.icon

                  return (
                    <motion.div key={item.title} variants={fadeUp} className={`${cardBase} p-8`}>
                      <div className="mb-6 flex items-start gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-500/10 text-violet-200">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="pt-1 text-[2.1rem] font-semibold leading-tight text-white">{item.title}</h3>
                      </div>
                      <p className="text-xl leading-9 text-zinc-400">{item.text}</p>
                    </motion.div>
                  )
                })}
              </motion.div>

              <motion.div variants={stagger} className="mt-10 grid gap-5">
                {principles.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6"
                  >
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-violet-300" />
                    <p className="text-base leading-8 text-zinc-300">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          <section className={`${shell} py-24`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <SectionTitle
                badge="Для кого"
                title="Кому особенно подойдет это решение"
                text="Этот формат нужен предпринимателям, которым уже недостаточно обычной административной помощи."
                icon={Users}
              />

              <motion.div variants={stagger} className="mt-12 grid gap-5 xl:max-w-[1080px]">
                {audience.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6"
                  >
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-violet-300" />
                    <p className="text-lg leading-8 text-zinc-300">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          <section className={`${shell} py-24`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <SectionTitle
                badge="Результат"
                title="Что получает собственник в итоге"
                text="Главная ценность - не просто закрытая вакансия, а появление рядом человека, который реально усиливает бизнес."
                icon={CheckCircle2}
              />

              <motion.div variants={stagger} className="mt-14 grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
                {resultCards.map((item) => (
                  <motion.div key={item.title} variants={fadeUp} className={`${cardBase} p-8`}>
                    <h3 className="text-[2.2rem] font-semibold leading-tight text-white lg:text-[2.35rem]">{item.title}</h3>
                    <p className="mt-6 text-xl leading-9 text-zinc-400">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          <section className={`${shell} py-24`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <SectionTitle badge="Почему доверяют" title="Отзывы клиентов" icon={Quote} />

              <motion.div variants={stagger} className="mt-14 grid gap-8 md:grid-cols-2">
                {testimonials.map((item) => (
                  <motion.div key={item.name + item.company} variants={fadeUp} className={`${cardBase} p-8`}>
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-500/10 text-violet-200">
                        <Quote className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-4xl font-semibold text-white">{item.name}</div>
                        <div className="mt-2 text-xl text-violet-200">{item.company}</div>
                      </div>
                    </div>
                    <p className="text-xl leading-9 text-zinc-300">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          <section id="cta" className={`${shell} py-28`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2.5rem] border border-violet-300/15 bg-gradient-to-br from-violet-500/15 via-white/[0.04] to-transparent p-10 shadow-2xl backdrop-blur md:p-14"
            >
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl" />

              <div className="relative z-10 w-full">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Если вам нужен не просто ассистент, а человек, который действительно станет правой рукой и усилит
                  бизнес - обсудим задачу
                </h2>

                <p className="mt-6 w-full text-lg leading-8 text-zinc-300 md:text-xl">
                  Покажем подходящих кандидатов, разберем ваш формат задач и поймем, кто сможет вписаться в темп, стиль
                  управления и этап роста компании.
                </p>

                <div className="mt-10 flex w-full flex-col gap-5 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex min-h-[72px] items-center justify-center gap-3 rounded-[1.5rem] bg-white px-8 py-5 text-lg font-semibold text-zinc-900 transition hover:translate-y-[-1px]"
                  >
                    <Send className="h-5 w-5" />
                    Получить подборку кандидатов
                  </a>

                  <a
                    href="#"
                    className="inline-flex min-h-[72px] items-center justify-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.05] px-8 py-5 text-lg font-semibold text-white transition hover:border-violet-300/30 hover:bg-violet-500/10"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Написать в Telegram
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </>
  )
}