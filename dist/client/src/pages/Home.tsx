import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeonCard } from "@/components/NeonCard";
import { GlitchText } from "@/components/GlitchText";
import { SectionHeader } from "@/components/SectionHeader";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Send, 
  Briefcase, 
  GraduationCap, 
  Github, 
  Linkedin, 
  Twitter 
} from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// --- Hero Section ---
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      
      <div className="container px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 border border-primary/30 rounded-full bg-primary/10 text-primary font-mono text-sm tracking-wider uppercase animate-pulse">
            System Online • Ready to Code
          </div>
          <h1 style={{ fontFamily: "'Dancing Script', cursive" }} className="text-4xl md:text-6xl lg:text-7xl mb-8 text-[#cc00cc] animate-pulse">
            Welcome to saksham's portfolio
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none">
            FULLSTACK
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">
              ENGINEER
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-mono">
            Building digital experiences that break the simulation.
            <br />
            React • Node • TypeScript • Next.js
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-colors clip-path-hex"
            >
              Initialize Contact
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors clip-path-hex"
            >
              View Protocols
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

// --- Skills Section ---
function Skills() {
  const skills = [
    { icon: <Globe className="w-8 h-8" />, title: "Frontend", items: ["React", "TypeScript", "Tailwind", "Framer Motion"], color: "primary" as const },
    { icon: <Database className="w-8 h-8" />, title: "Backend", items: ["Node.js", "PostgreSQL", "Drizzle", "Express"], color: "secondary" as const },
    { icon: <Cpu className="w-8 h-8" />, title: "Tools", items: ["Git", "Docker", "AWS", "Linux"], color: "accent" as const },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <SectionHeader title="Capabilities" subtitle="Tech stack calibrated for maximum performance." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <NeonCard key={skill.title} variant={skill.color} delay={index * 0.1} className="h-full">
              <div className={`mb-6 p-4 inline-block bg-${skill.color}/10 rounded-lg text-${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl mb-6 flex items-center gap-2">
                <GlitchText text={skill.title} />
              </h3>
              <div className="space-y-4">
                {skill.items.map((item, i) => (
                  <div key={item} className="relative">
                    <div className="flex justify-between mb-1 font-mono text-sm">
                      <span>{item}</span>
                      <span className="text-muted-foreground">{(90 - i * 5)}%</span>
                    </div>
                    <div className="h-2 bg-secondary/10 w-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${90 - i * 5}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className={`h-full bg-${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Education & Experience ---
function Timeline() {
  const education = [
    { year: "2023", title: "Full Stack Certification", place: "Tech Institute", desc: "Advanced web development bootcamp focused on MERN stack." },
    { year: "2021", title: "BS Computer Science", place: "University of Technology", desc: "Major in Software Engineering, Minor in AI." },
  ];

  const experience = [
    { year: "2023 - Present", title: "Senior Frontend Dev", place: "CyberCorp", desc: "Leading frontend architecture for enterprise SaaS products." },
    { year: "2021 - 2023", title: "Web Developer", place: "Digital Agency", desc: "Built award-winning marketing sites for Fortune 500 clients." },
  ];

  return (
    <section id="education" className="py-24 bg-card/30 relative border-y border-white/5">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-display font-bold">Education Data</h2>
            </div>
            <div className="space-y-12 border-l-2 border-white/10 ml-3 pl-8">
              {education.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-background border-2 border-primary rounded-full" />
                  <span className="text-primary font-mono text-sm mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <div className="text-white/60 font-mono text-sm mb-3">{item.place}</div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div id="experience">
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-display font-bold">Work Logs</h2>
            </div>
            <div className="space-y-12 border-l-2 border-white/10 ml-3 pl-8">
              {experience.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-background border-2 border-secondary rounded-full" />
                  <span className="text-secondary font-mono text-sm mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <div className="text-white/60 font-mono text-sm mb-3">{item.place}</div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Projects Section ---
function Projects() {
  const projects = [
    { 
      title: "Neon Dashboard", 
      desc: "Real-time analytics platform with WebSocket data streams.", 
      tags: ["React", "D3.js", "Socket.io"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Cyber Commerce", 
      desc: "Headless e-commerce solution with 3D product previews.", 
      tags: ["Next.js", "Shopify", "Three.js"],
      img: "https://images.unsplash.com/photo-1614741118830-c73779e537d8?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "AI Chat Interface", 
      desc: "Conversational UI with streaming responses and markdown support.", 
      tags: ["TypeScript", "OpenAI", "Tailwind"],
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 mx-auto">
        <SectionHeader title="Deployed Protocols" subtitle="Recent mission outputs and code artifacts." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <NeonCard key={i} variant={i === 0 ? "primary" : i === 1 ? "secondary" : "accent"} delay={i * 0.1} className="p-0 overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                {/* HTML Comment describing image: Abstract digital tech background */}
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact Section ---
function Contact() {
  const submitMutation = useSubmitContact();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: InsertMessage) => {
    try {
      await submitMutation.mutateAsync(data);
      form.reset();
    } catch (error) {
      // Error handled by hook
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Establish Uplink" subtitle="Send a secure transmission." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Currently available for freelance contracts and full-time opportunities. 
                Initiate protocol to discuss collaboration.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center text-primary">
                    <Terminal />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-mono">EMAIL_PROTOCOL</div>
                    <div className="text-lg font-bold">hello@dev.log</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center text-secondary">
                    <Code2 />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-mono">LOCATION_NODE</div>
                    <div className="text-lg font-bold">San Francisco, CA</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border p-8 relative">
              <div className="absolute top-0 right-0 p-2 opacity-50">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-wider text-primary">Identity</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="ENTER NAME" 
                            {...field} 
                            className="bg-black/50 border-white/10 focus:border-primary font-mono rounded-none h-12" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-wider text-primary">Frequency</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="ENTER EMAIL" 
                            type="email" 
                            {...field} 
                            className="bg-black/50 border-white/10 focus:border-primary font-mono rounded-none h-12" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-wider text-primary">Payload</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="ENTER MESSAGE DATA..." 
                            {...field} 
                            className="bg-black/50 border-white/10 focus:border-primary font-mono rounded-none min-h-[150px]" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full h-14 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitMutation.isPending ? "Transmitting..." : (
                      <>
                        Send Transmission <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-sm text-muted-foreground font-mono">
      <div className="container mx-auto">
        <p>SYSTEM STATUS: ONLINE • {new Date().getFullYear()} © DEV.LOG</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
