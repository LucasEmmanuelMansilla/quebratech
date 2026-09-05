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

export const pymesCopy: MarketingCopy = {
  audience: "pymes",
  homeHref: "/pymes",
  sourceLabel: "Empresas / pymes",
  seo: {
    title: "Quebratech | Software Factory para pymes",
    description:
      "Quebratech es una software factory que convierte fricciones del negocio en productos digitales claros, útiles y listos para escalar.",
    keywords: [
      "software factory",
      "desarrollo de software",
      "productos digitales",
      "aplicaciones a medida",
      "pymes",
      "Quebratech",
    ],
  },
  navItems: [
    { id: "problemas", label: "Desafíos" },
    { id: "soluciones", label: "Soluciones" },
    { id: "proceso", label: "Proceso" },
    { id: "contacto", label: "Contacto" },
  ],
  headerCta: "Hablemos",
  hero: {
    eyebrow: "Software Factory · Productos digitales a medida",
    title: "Convertimos fricciones del negocio en software que genera resultados",
    description:
      "Si tu empresa crece, pero la operación se traba con planillas, procesos manuales o sistemas que no acompañan, diseñamos y construimos el producto digital que necesita para recuperar control, velocidad y margen.",
    primaryCta: "Contanos tu desafío",
    secondaryCta: "Ver cómo lo resolvemos",
    proofPoints: [
      "Diagnóstico orientado a impacto",
      "Producto usable desde el primer release",
      "Equipo listo para construir y evolucionar",
    ],
  },
  painSection: {
    eyebrow: "El problema real",
    title: "El crecimiento sin software adecuado termina costando más que invertirlo",
    description:
      "No vendemos tecnología por catálogo. Empezamos por el dolor concreto de tu operación y lo traducimos a un producto que el equipo realmente usa.",
  },
  painPoints: [
    {
      id: "ops",
      title: "La operación no escala con la demanda",
      description:
        "Más clientes, más pedidos y más excepciones… pero el mismo equipo resolviendo todo a mano. El cuello de botella no es la voluntad: es la falta de sistema.",
      icon: Gauge,
    },
    {
      id: "visibility",
      title: "Decidís sin visibilidad en tiempo real",
      description:
        "La información vive en chats, planillas y cabezas distintas. Cuando llega el número correcto, la decisión ya llegó tarde.",
      icon: ChartLine,
    },
    {
      id: "legacy",
      title: "Tu software actual frena al negocio",
      description:
        "Herramientas genéricas o sistemas viejos que no se adaptan. El equipo improvisa alrededor de la herramienta en lugar de potenciarse con ella.",
      icon: Settings2,
    },
    {
      id: "time",
      title: "El tiempo se pierde en tareas repetitivas",
      description:
        "Cargas dobles, seguimientos manuales y procesos que nadie automatizó. Cada hora operativa mal gastada es margen que no vuelve.",
      icon: Workflow,
    },
  ],
  solutionsSection: {
    eyebrow: "Soluciones",
    title: "Productos digitales pensados para destrabar tu operación",
    description:
      "Cada solución nace de un problema de negocio. Vos traés el desafío; nosotros lo convertimos en software claro, medible y listo para evolucionar.",
  },
  solutions: [
    {
      id: "custom-product",
      problem: "¿Tu operación no entra en una plantilla?",
      title: "Producto digital a medida",
      description:
        "Diseñamos y construimos el sistema que tu proceso realmente necesita: flujos, roles, reglas de negocio y una interfaz que el equipo adopta sin fricción.",
      outcomes: [
        "Menos trabajo manual",
        "Procesos estandarizados",
        "Base lista para escalar",
      ],
      icon: Boxes,
    },
    {
      id: "web-apps",
      problem: "¿Necesitás estar donde está tu cliente?",
      title: "Aplicaciones web y móviles",
      description:
        "Creamos experiencias digitales para vender, operar o atender con la misma calidad en escritorio y en el bolsillo de tu usuario.",
      outcomes: [
        "Canales digitales propios",
        "Mejor experiencia de usuario",
        "Datos centralizados",
      ],
      icon: AppWindow,
    },
    {
      id: "modernization",
      problem: "¿Tu sistema actual ya no acompaña?",
      title: "Modernización de sistemas",
      description:
        "Replanteamos software existente: lo estabilizamos, lo hacemos usable y lo alineamos con la operación de hoy, sin tirar a la basura lo que todavía aporta valor.",
      outcomes: [
        "Menos incidentes",
        "Mayor adopción interna",
        "Menor costo de mantenimiento",
      ],
      icon: Layers3,
    },
    {
      id: "automation",
      problem: "¿El crecimiento se come el margen?",
      title: "Automatización operativa",
      description:
        "Identificamos tareas repetitivas y las convertimos en flujos automáticos, integraciones y paneles para que tu equipo se enfoque en lo que genera valor.",
      outcomes: [
        "Ciclos más cortos",
        "Menos errores humanos",
        "Más capacidad sin sumar caos",
      ],
      icon: Workflow,
    },
  ],
  processSection: {
    eyebrow: "Cómo trabajamos",
    title: "De la fricción al producto, con claridad en cada etapa",
    description:
      "Un proceso simple, profesional y orientado a resultados. Sabés qué estamos construyendo, por qué y qué impacto esperar.",
  },
  processSteps: [
    {
      step: "01",
      title: "Diagnóstico del problema",
      description:
        "Escuchamos el negocio, mapeamos fricciones y priorizamos el dolor que más impacto genera si lo resolvemos primero.",
      icon: Search,
    },
    {
      step: "02",
      title: "Diseño de la solución",
      description:
        "Definimos alcance, experiencia de usuario y arquitectura. Validamos la propuesta antes de invertir en desarrollo intensivo.",
      icon: ClipboardCheck,
    },
    {
      step: "03",
      title: "Construcción iterativa",
      description:
        "Entregamos por incrementos útiles. Ves progreso real, probás temprano y ajustamos con evidencia, no con intuición.",
      icon: Code2,
    },
    {
      step: "04",
      title: "Lanzamiento y evolución",
      description:
        "Ponemos el producto en producción, medimos adopción e impacto, y lo evolucionamos para acompañar el siguiente salto del negocio.",
      icon: Rocket,
    },
  ],
  differentialsSection: {
    eyebrow: "Por qué Quebratech",
    title: "Una software factory enfocada en resolver, no en adornar",
    description:
      "Combinamos criterio de producto, ejecución técnica y comunicación clara para que la inversión digital se sienta en la operación.",
  },
  differentials: [
    {
      id: "problem-first",
      title: "Empezamos por el problema",
      description:
        "Antes del stack, entendemos el negocio. La tecnología aparece como respuesta, no como punto de partida.",
      icon: MessageSquareQuote,
    },
    {
      id: "usable",
      title: "Producto usable, no solo código",
      description:
        "Cuidamos UX/UI, claridad y adopción. Un sistema brillante que nadie usa no resuelve nada.",
      icon: ShieldCheck,
    },
    {
      id: "partnership",
      title: "Socios de construcción",
      description:
        "Trabajamos como extensión de tu equipo: transparentes con el avance, honestos con el alcance y enfocados en el resultado.",
      icon: Layers3,
    },
  ],
  ctaSection: {
    title: "¿Tu negocio ya superó la capacidad de tu operación actual?",
    description:
      "Contanos qué se traba hoy. En una conversación corta identificamos si tiene sentido construir un producto, modernizar lo existente o automatizar lo que te está consumiendo tiempo.",
    button: "Agendar una conversación",
  },
  contactSection: {
    eyebrow: "Contacto",
    title: "Contanos el problema. Nosotros te proponemos el camino.",
    description:
      "Completá el formulario con el contexto de tu negocio. Te respondemos con una mirada concreta sobre cómo encarar la solución.",
    successMessage:
      "Recibimos tu consulta. Nos vamos a contactar a la brevedad para entender tu desafío.",
    errorMessage: `No pudimos enviar el mensaje. Probá de nuevo o escribinos a ${brand.email}.`,
  },
  contactForm: {
    companyLabel: "Empresa",
    messageLabel: "¿Qué problema necesitás resolver?",
    messagePlaceholder:
      "Ej.: Estamos creciendo y la operación se nos va de las manos con planillas y procesos manuales...",
    submitLabel: "Enviar consulta",
  },
  footer: {
    blurb:
      "Software factory que transforma problemas de negocio en productos digitales claros, útiles y listos para crecer.",
  },
};
