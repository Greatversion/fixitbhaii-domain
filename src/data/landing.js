import { Zap, Monitor, Smartphone, Refrigerator, Tv, Laptop, ShowerHead as WashingMachine, Clock, Shield, Award, MapPin } from 'lucide-react';

export const services = [
  {
    icon: Zap,
    title: "Electrical Repairs",
    description: "Expert electrical solutions for homes and offices",
    features: ["Wiring & Rewiring", "Switch & Socket Installation", "Circuit Breaker Repair", "Emergency Services"]
  },
  {
    icon: Monitor,
    title: "Computer Repair",
    description: "Professional computer and laptop repair services",
    features: ["Hardware Diagnostics", "Software Installation", "Virus Removal", "Data Recovery"]
  },
  {
    icon: Smartphone,
    title: "Mobile Repair",
    description: "Quick and reliable mobile device repairs",
    features: ["Screen Replacement", "Battery Replacement", "Water Damage Repair", "Software Issues"]
  }
];

export const appliances = [
  { icon: Refrigerator, name: "Refrigerators", count: "150+ Available" },
  { icon: WashingMachine, name: "Washing Machines", count: "80+ Available" },
  { icon: Tv, name: "Televisions", count: "200+ Available" },
  { icon: Laptop, name: "Laptops", count: "120+ Available" },
  { icon: Smartphone, name: "Smartphones", count: "300+ Available" },
  { icon: Monitor, name: "Monitors", count: "90+ Available" }
];

export const features = [
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock support for emergency repairs"
  },
  {
    icon: Shield,
    title: "Warranty Protected",
    description: "All repairs come with comprehensive warranty"
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: "Skilled professionals with verified credentials"
  },
  {
    icon: MapPin,
    title: "Local Network",
    description: "Connect with nearby vendors and service providers"
  }
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
     location: "Kapoorthala,Lucknow",
    rating: 5,
    comment: "Excellent service! Fixed my laptop within 2 hours. Highly recommended!"
  },
  {
    name: "Priya Sharma",
    location: "Indira Nagar,Lucknow",
    rating: 5,
    comment: "Found a great deal on a washing machine through their marketplace. Very reliable!"
  },
  {
    name: "Amit Patel",
    location: "Chinhat,Lucknow",
    rating: 5,
    comment: "Professional electrical work done at my office. Quick and efficient service."
  }
];