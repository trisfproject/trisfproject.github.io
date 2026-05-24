import {
  Boxes,
  Cloud,
  CloudCog,
  Code2,
  Container,
  Database,
  Gauge,
  Github,
  Globe2,
  Layers3,
  LineChart,
  MonitorCog,
  Orbit,
  RadioTower,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react';

export const techStackGroups = [
  {
    category: 'Infrastructure',
    description: 'Runtime, networking, and platform foundations.',
    items: [
      { name: 'Kubernetes', icon: Boxes },
      { name: 'Docker', icon: Container },
      { name: 'Linux', icon: Server },
      { name: 'Terraform', icon: CloudCog },
      { name: 'NGINX', icon: Globe2 },
    ],
  },
  {
    category: 'Monitoring & Observability',
    description: 'Metrics, dashboards, uptime signals, and alerting.',
    items: [
      { name: 'Grafana', icon: LineChart },
      { name: 'Prometheus', icon: RadioTower },
      { name: 'Datadog', icon: Gauge },
      { name: 'New Relic', icon: Orbit },
      { name: 'Nyx', icon: MonitorCog },
    ],
  },
  {
    category: 'Cloud & Automation',
    description: 'Cloud delivery, edge controls, and repeatable pipelines.',
    items: [
      { name: 'GCP', icon: Cloud },
      { name: 'GitHub Actions', icon: Github },
      { name: 'Cloudflare', icon: ShieldCheck },
      { name: 'CI/CD', icon: Workflow },
    ],
  },
  {
    category: 'Development',
    description: 'Web, database, mobile, and application engineering.',
    items: [
      { name: 'React', icon: Code2 },
      { name: 'Laravel', icon: Layers3 },
      { name: 'MySQL', icon: Database },
      { name: 'Firebase', icon: MonitorCog },
      { name: 'Android', icon: Smartphone },
    ],
  },
];
