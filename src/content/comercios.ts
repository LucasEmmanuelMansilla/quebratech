import {
  AppWindow,
  Boxes,
  ChartLine,
  ClipboardCheck,
  Code2,
  Gauge,
  Layers3,
  MessageSquareQuote,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { brand } from "@/content/brand";
import type { MarketingCopy } from "@/content/types";

export const comerciosCopy: MarketingCopy = {
  audience: "comercios",
  homeHref: "/",
  sourceLabel: "Comercios y emprendimientos",
  seo: {
    title: "Quebratech | Sistema a medida para tu negocio",
    description:
      "¿Se te complica seguir el ritmo con planillas, cuadernos o WhatsApp? Te armamos un sistema simple, pensado para cómo trabajás vos.",
    keywords: [
      "sistema a medida",
      "software para comercios",
      "pedidos y stock",
      "microemprendimientos",
      "negocio chico",
      "Quebratech",
    ],
  },
  navItems: [
    { id: "problemas", label: "Problemas" },
    { id: "soluciones", label: "Soluciones" },
    { id: "proceso", label: "Proceso" },
    { id: "contacto", label: "Contacto" },
  ],
  headerCta: "Contanos",
  hero: {
    eyebrow: "Para comercios y emprendimientos",
    title: "Un sistema hecho a medida para tu negocio",
    description:
      "¿Se te complica seguir el ritmo con planillas, cuadernos o WhatsApp para llevar pedidos, stock o turnos? Te armamos un sistema simple, pensado para cómo trabajás vos, para que recuperes el control y dejes de perder tiempo (y ventas) en cosas que se pueden resolver solas.",
    primaryCta: "Contanos tu problema",
    secondaryCta: "Ver cómo te podemos ayudar",
    proofPoints: [
      "Te escuchamos antes de proponerte nada",
      "Empezás a usarlo desde el primer momento",
      "Te acompañamos después de entregarlo, no te dejamos solo",
    ],
  },
  painSection: {
    eyebrow: "El problema",
    title: "No vendemos sistemas de catálogo",
    description:
      "Primero entendemos qué te complica el día a día, y después armamos algo que de verdad usás.",
  },
  painPoints: [
    {
      id: "ops",
      title: "Se te complica seguir el ritmo",
      description:
        "Más pedidos, más clientes, más cosas para atender… pero seguís haciendo todo a mano, vos o tu equipo. No es que falten ganas: falta un sistema que te ayude.",
      icon: Gauge,
    },
    {
      id: "visibility",
      title: "No sabés qué está pasando en tu negocio en el momento",
      description:
        "La info está repartida entre WhatsApp, cuadernos y planillas sueltas. Cuando por fin juntás los números, ya es tarde para decidir con ellos.",
      icon: ChartLine,
    },
    {
      id: "legacy",
      title: "Lo que usás hoy te frena en vez de ayudarte",
      description:
        "Programas genéricos o sistemas viejos que no se adaptan a cómo trabajás. Terminás vos acomodándote a la herramienta, en vez de que la herramienta te facilite el trabajo.",
      icon: Settings2,
    },
    {
      id: "time",
      title: "Perdés tiempo haciendo lo mismo dos veces",
      description:
        "Cargar el mismo dato en dos lugares, hacer seguimientos a mano, tareas repetitivas que nadie automatizó todavía. Cada rato que perdés ahí es tiempo que no te vuelve.",
      icon: Workflow,
    },
  ],
  solutionsSection: {
    eyebrow: "Soluciones",
    title: "Cada solución nace de un problema real de tu negocio",
    description:
      "Vos nos contás qué te complica, nosotros lo convertimos en algo simple, claro y que podés usar desde el día uno.",
  },
  solutions: [
    {
      id: "custom-product",
      problem: '¿Tu negocio no entra en un programa "de paquete"?',
      title: "Un sistema hecho a tu medida",
      description:
        "Armamos el sistema que tu negocio necesita de verdad: cómo tomás pedidos, cómo manejás stock, cómo lo usa tu equipo. Nada de plantillas que después tenés que forzar para que te sirvan.",
      outcomes: [
        "Menos trabajo a mano",
        "Todo más ordenado",
        "Preparado para crecer con vos",
      ],
      icon: Boxes,
    },
    {
      id: "web-apps",
      problem: "¿Necesitás estar donde está tu cliente?",
      title: "Apps para vender y atender online",
      description:
        "Creamos una web o una app para que tus clientes te encuentren, compren o pidan turno, con la misma buena experiencia desde la compu o desde el celular.",
      outcomes: [
        "Tu propio canal de venta",
        "Más fácil para tu cliente",
        "Toda la info en un solo lugar",
      ],
      icon: AppWindow,
    },
    {
      id: "modernization",
      problem: "¿El sistema que ya tenés no te acompaña más?",
      title: "Ponemos al día lo que ya tenés",
      description:
        "Si tenés un sistema viejo o que ya no te sirve, lo mejoramos: lo hacemos más fácil de usar y lo adaptamos a cómo trabajás hoy, sin tirar a la basura lo que todavía funciona.",
      outcomes: [
        "Menos problemas técnicos",
        "Más fácil de usar para tu equipo",
        "Menos gasto en mantenerlo",
      ],
      icon: Layers3,
    },
    {
      id: "automation",
      problem: "¿Crecer te está comiendo la ganancia?",
      title: "Automatizamos lo repetitivo",
      description:
        "Buscamos esas tareas que hacés siempre igual y las convertimos en algo automático, para que vos y tu equipo se dediquen a lo que realmente hace crecer el negocio.",
      outcomes: [
        "Todo más rápido",
        "Menos errores por hacerlo a mano",
        "Podés crecer sin volverte loco",
      ],
      icon: Workflow,
    },
  ],
  processSection: {
    eyebrow: "Cómo trabajamos",
    title: "Un proceso simple y claro",
    description:
      "Vas a saber siempre qué estamos haciendo, por qué, y qué vas a ganar con eso.",
  },
  processSteps: [
    {
      step: "01",
      title: "Te escuchamos",
      description:
        "Charlamos sobre tu negocio, entendemos qué te complica hoy y detectamos qué es lo primero que hay que resolver para que se note el cambio.",
      icon: Search,
    },
    {
      step: "02",
      title: "Te mostramos la idea antes de construir",
      description:
        "Te mostramos cómo va a funcionar y qué pinta va a tener, antes de ponernos a programar. Así lo validamos juntos y evitamos sorpresas.",
      icon: ClipboardCheck,
    },
    {
      step: "03",
      title: "Construimos de a poco",
      description:
        "Te vamos entregando partes que ya podés usar, no esperás meses para ver algo. Vas probando, nos contás qué ajustar, y seguimos mejorando con eso.",
      icon: Code2,
    },
    {
      step: "04",
      title: "Lo ponemos a funcionar y seguimos mejorándolo",
      description:
        "Lo dejamos funcionando en tu negocio, vemos cómo lo usan vos y tu equipo, y lo seguimos mejorando a medida que tu negocio va creciendo.",
      icon: Rocket,
    },
  ],
  differentialsSection: {
    eyebrow: "Por qué Quebratech",
    title: "Nos importa resolverte el problema",
    description: "No te vendemos algo lindo que después no usás.",
  },
  differentials: [
    {
      id: "problem-first",
      title: "Primero el problema, después la tecnología",
      description:
        "Antes de pensar en programas o sistemas, entendemos tu negocio. La tecnología es la respuesta, no el punto de partida.",
      icon: MessageSquareQuote,
    },
    {
      id: "usable",
      title: "Que se use, no que solo funcione",
      description:
        'Nos importa que sea fácil de entender y de usar, tanto para vos como para tu equipo. Un sistema que nadie usa no te sirve de nada, por más "avanzado" que sea.',
      icon: ShieldCheck,
    },
    {
      id: "partnership",
      title: "Estamos con vos, no solo te entregamos algo y chau",
      description:
        "Trabajamos codo a codo con vos: te contamos cómo vamos, somos claros con los tiempos y no desaparecemos después de la entrega.",
      icon: Layers3,
    },
  ],
  ctaSection: {
    title: "¿Tu negocio ya te quedó chico para manejarlo como hasta ahora?",
    description:
      "Contanos qué se te complica hoy en el día a día. En una charla corta y sin compromiso, vemos juntos si conviene armar algo nuevo, mejorar lo que ya tenés, o automatizar lo que más tiempo te saca.",
    button: "Agendar una charla",
  },
  contactSection: {
    eyebrow: "Contacto",
    title: "Contanos tu problema. Nosotros te decimos cómo lo resolvemos.",
    description:
      "Completá el formulario con lo básico de tu negocio. Te respondemos con ideas concretas, no con vueltas.",
    successMessage:
      "Recibimos tu consulta. Te vamos a escribir pronto para charlarlo.",
    errorMessage: `No pudimos enviar el mensaje. Probá de nuevo o escribinos a ${brand.email}.`,
  },
  contactForm: {
    companyLabel: "Negocio / Rubro",
    messageLabel: "¿Qué te gustaría resolver?",
    messagePlaceholder:
      "Ej.: Tomo pedidos por WhatsApp y se me pierden, o no sé cuánto stock me queda...",
    submitLabel: "Enviar consulta",
  },
  footer: {
    blurb:
      "Armamos sistemas simples para comercios, emprendimientos y negocios chicos. Para que dejes de pelearte con planillas y recuperes el control.",
  },
};
