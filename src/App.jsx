import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  FileText, 
  Image, 
  FileImage, 
  ScanLine, 
  Edit3, 
  Globe, 
  Upload, 
  Download, 
  Shield, 
  Zap, 
  Users,
  Star,
  ArrowRight,
  Check,
  Menu,
  X
} from 'lucide-react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [conversionType, setConversionType] = useState('')

  const features = [
    {
      icon: FileImage,
      title: 'JPG to PDF',
      description: 'Convert images to PDF documents instantly',
      color: 'text-blue-600'
    },
    {
      icon: FileText,
      title: 'PDF to JPG',
      description: 'Extract pages from PDF as images',
      color: 'text-green-600'
    },
    {
      icon: Edit3,
      title: 'PDF to Word',
      description: 'Convert PDF to editable Word documents',
      color: 'text-purple-600'
    },
    {
      icon: ScanLine,
      title: 'Scan to PDF',
      description: 'OCR for physical documents',
      color: 'text-orange-600'
    },
    {
      icon: Edit3,
      title: 'PDF Editor',
      description: 'Edit, annotate, merge, and split PDFs',
      color: 'text-red-600'
    },
    {
      icon: Globe,
      title: 'HTML to PDF',
      description: 'Convert web pages to PDF format',
      color: 'text-indigo-600'
    }
  ]

  const additionalFeatures = [
    'Word to PDF', 'Excel to PDF', 'PowerPoint to PDF', 'Image Converter',
    'Compress PDF', 'PDF Merger', 'PDF Splitter', 'Watermark Tool'
  ]

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['5 files per day', '10MB max file size', 'Basic conversion', 'Standard support'],
      popular: false
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      features: ['Unlimited files', '100MB max file size', 'Batch processing', 'Priority support', 'Cloud sync'],
      popular: true
    },
    {
      name: 'Business',
      price: '$29.99',
      period: 'per month',
      features: ['API access', 'Team features', '500MB max file size', 'Advanced security', 'Custom branding'],
      popular: false
    }
  ]

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleConversion = (type) => {
    setConversionType(type)
    // Simulate conversion process
    setTimeout(() => {
      alert(`Converting ${selectedFile?.name || 'file'} using ${type}...`)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="ConvertHub" className="h-10 w-10" />
              <span className="text-2xl font-bold text-gradient">ConvertHub</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button className="btn-primary">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="ghost">Sign In</Button>
                  <Button className="btn-primary">Get Started</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Convert Anything,<br />
            <span className="text-gradient">Anywhere, Anytime</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional file conversion platform for all your needs. Fast, secure, and reliable conversion 
            for documents, images, and more.
          </p>

          {/* Quick Upload Area */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="upload-area rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Drop your files here</h3>
              <p className="text-gray-600 mb-4">or click to browse</p>
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              />
              <label htmlFor="file-upload">
                <Button className="btn-primary cursor-pointer">
                  Choose File
                </Button>
              </label>
              {selectedFile && (
                <p className="mt-4 text-sm text-gray-600">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Conversion Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to convert, edit, and manage your files efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card cursor-pointer" onClick={() => handleConversion(feature.title)}>
                <CardHeader>
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Convert Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              And Many More Features
            </h3>
            <p className="text-lg text-gray-600">
              Comprehensive file conversion and editing capabilities
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {additionalFeatures.map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ConvertHub?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Private</h3>
              <p className="text-gray-600">
                Your files are automatically deleted after 1 hour. We prioritize your privacy and security.
              </p>
            </div>
            <div className="text-center">
              <Zap className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Advanced processing algorithms ensure quick conversion without compromising quality.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trusted by Millions</h3>
              <p className="text-gray-600">
                Join millions of professionals, students, and businesses who trust ConvertHub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'btn-primary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="ConvertHub" className="h-8 w-8" />
                <span className="text-xl font-bold">ConvertHub</span>
              </div>
              <p className="text-gray-400">
                Convert anything, anywhere, anytime. Your trusted file conversion partner.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">PDF Converter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Image Converter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Document Editor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Batch Processing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ConvertHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

