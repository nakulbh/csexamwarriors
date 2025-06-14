import { useState, useEffect } from 'react';
import { BookOpen, BarChart3, Users, Check, Phone, Mail, Instagram, Calendar, Target, Award, Clock, MessageCircle, GraduationCap, Trophy, Zap, Star, ChevronRight, Play, BookMarked, Brain, Lightbulb } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('executive');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('December 22, 2025 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const executivePricing = [
    {
      title: "Subject Wise Test",
      subtitle: "1 Subject",
      price: "₹199",
      features: ["4 Portion Tests", "2 Full Subject Tests", "Detailed Solutions", "Performance Analytics"],
      icon: BookOpen
    },
    {
      title: "Subject Wise Test",
      subtitle: "2 Subjects", 
      price: "₹399",
      features: ["4 Portion Tests each", "2 Full Syllabus Tests", "Cross-subject Analysis", "Doubt Resolution"],
      icon: BookMarked
    },
    {
      title: "Group Wise Test",
      subtitle: "1 Group",
      price: "₹999", 
      features: ["4 Portion Tests each subject", "2 Full Syllabus Tests", "Group Performance Tracking", "Unlimited Doubts"],
      icon: Users
    },
    {
      title: "All Groups Test",
      subtitle: "Both Groups",
      price: "₹1499",
      features: ["4 Portion Tests each subject", "4 Full Syllabus Tests", "Complete Coverage", "1:1 Mentorship Access"],
      popular: true,
      icon: Trophy
    }
  ];

  const professionalPricing = [
    {
      title: "Subject Wise Test", 
      subtitle: "1 Subject",
      price: "₹299",
      features: ["4 Portion Tests", "2 Full Subject Tests", "Advanced Analytics", "Expert Review"],
      icon: BookOpen
    },
    {
      title: "Subject Wise Test",
      subtitle: "2 Subjects",
      price: "₹499", 
      features: ["4 Portion Tests each", "2 Full Syllabus Tests", "Comparative Analysis", "Priority Support"],
      icon: BookMarked
    },
    {
      title: "Group Wise Test",
      subtitle: "1 Group", 
      price: "₹1499",
      features: ["4 Portion Tests each subject", "3 Full Syllabus Tests", "Advanced Insights", "Weekly Mentorship"],
      icon: Users
    },
    {
      title: "All Groups Test",
      subtitle: "Both Groups",
      price: "₹2999", 
      features: ["4 Portion Tests each subject", "4 Full Syllabus Tests", "Complete Professional Coverage", "Premium 1:1 Support"],
      popular: true,
      icon: Trophy
    }
  ];

  const fastTestPricing = [
    { level: "Executive", subjectWise: "₹250", singleGroup: "₹300", allGroups: "₹500" },
    { level: "Professional", subjectWise: "₹250", singleGroup: "₹300", allGroups: "₹500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/IMG_20250407_112149.png" 
                  alt="CS Exam Warriors Logo" 
                  className="w-16 h-16 rounded-full shadow-lg ring-4 ring-orange-500"
                />
                <div>
                  <h3 className="text-2xl font-bold text-orange-400">CS Exam Warriors</h3>
                  <p className="text-blue-200">Your Victory Partner</p>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Master the CS Exams with 
                <span className="text-orange-400"> mentor-crafted </span>test series
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Unlimited mocks, in-depth analysis, and personalized 1:1 mentorship for December 2025 attempt
              </p>
              
              {/* Countdown Timer */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">December 2025 CS Exam</h3>
                  <p className="text-blue-200 text-sm">Time remaining until exam date</p>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="bg-white bg-opacity-10 rounded-xl p-3">
                    <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">Days</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-xl p-3">
                    <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">Hours</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-xl p-3">
                    <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">Minutes</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-xl p-3">
                    <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">Seconds</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <GraduationCap size={24} />
                  <span>Enroll today</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play size={20} />
                  <span>Get a call back!</span>
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-3 bg-white bg-opacity-10 rounded-lg">
                      <div className="bg-orange-500 p-2 rounded-full">
                        <Target className="text-white" size={20} />
                      </div>
                      <span className="text-white font-medium">Latest ICSI Exam Pattern</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white bg-opacity-10 rounded-lg">
                      <div className="bg-orange-500 p-2 rounded-full">
                        <Calendar className="text-white" size={20} />
                      </div>
                      <span className="text-white font-medium">December 2025 Ready</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white bg-opacity-10 rounded-lg">
                      <div className="bg-orange-500 p-2 rounded-full">
                        <MessageCircle className="text-white" size={20} />
                      </div>
                      <span className="text-white font-medium">Unlimited Doubt Solving</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white bg-opacity-10 rounded-lg">
                      <div className="bg-orange-500 p-2 rounded-full">
                        <Award className="text-white" size={20} />
                      </div>
                      <span className="text-white font-medium">1:1 Expert Mentorship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings - Bento Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CS Exam Warriors?</h2>
            <p className="text-xl text-gray-600">Comprehensive preparation with expert guidance</p>
          </div>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-6 h-[800px]">
            
            {/* Main Test Series Card - Large */}
            <div className="col-span-12 md:col-span-8 lg:col-span-7 row-span-2 group bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BookOpen className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Test Series</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">50+ comprehensive mocks with detailed solutions following latest ICSI pattern. Get exam-ready with our structured approach.</p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Portion-wise and full syllabus tests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Latest amendments included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Application-based questions</span>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Start Testing
                  </button>
                </div>
              </div>
            </div>

            {/* Analytics Card - Medium */}
            <div className="col-span-12 md:col-span-4 lg:col-span-5 group bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-orange-200 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500 opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BarChart3 className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Analytics</h3>
                <p className="text-gray-600 mb-4">Real-time performance tracking with detailed insights</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Zap className="text-orange-500" size={14} />
                    <span className="text-gray-700">Performance analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="text-orange-500" size={14} />
                    <span className="text-gray-700">Weakness identification</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mentorship Card - Medium */}
            <div className="col-span-12 md:col-span-6 lg:col-span-5 group bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-purple-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500 opacity-10 rounded-full -translate-y-10 -translate-x-10"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">1:1 Expert Mentorship</h3>
                <p className="text-gray-600 mb-4">Weekly personalized sessions with CS professionals</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Brain className="text-purple-500" size={14} />
                    <span className="text-gray-700">Personalized study plans</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="text-purple-500" size={14} />
                    <span className="text-gray-700">24/7 doubt resolution</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Rate Card - Small */}
            <div className="col-span-12 md:col-span-3 lg:col-span-3 group bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-green-200 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-green-500 opacity-5 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Trophy className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-2">95%</h3>
                <p className="text-gray-700 font-semibold">Success Rate</p>
                <p className="text-sm text-gray-600 mt-2">Students clearing exams</p>
              </div>
            </div>

            {/* Live Tests Card - Small */}
            <div className="col-span-12 md:col-span-3 lg:col-span-4 group bg-gradient-to-br from-indigo-50 to-blue-100 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-indigo-200 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-indigo-500 opacity-10 rounded-full translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Mock Tests</h3>
                <p className="text-gray-600 text-sm mb-3">Real exam simulation with timer</p>
                <div className="text-2xl font-bold text-indigo-600">50+</div>
                <p className="text-xs text-gray-500">Available tests</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Level</h2>
            <p className="text-xl text-gray-600">Tailored packages for Executive and Professional students</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveTab('executive')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'executive'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Executive Level
              </button>
              <button
                onClick={() => setActiveTab('professional')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'professional'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Professional Level
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === 'executive' ? executivePricing : professionalPricing).map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 text-sm font-bold rounded-bl-lg shadow-lg">
                      <Trophy size={16} className="inline mr-1" />
                      Popular
                    </div>
                  )}
                  <div className="p-8">
                    <div className={`${activeTab === 'executive' ? 'bg-blue-100' : 'bg-orange-100'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`${activeTab === 'executive' ? 'text-blue-600' : 'text-orange-600'}`} size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{plan.title}</h3>
                    <p className="text-gray-600 mb-4 text-center">{plan.subtitle}</p>
                    <div className={`text-4xl font-bold ${activeTab === 'executive' ? 'text-blue-600' : 'text-orange-600'} mb-6 text-center`}>{plan.price}</div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className={`${activeTab === 'executive' ? 'text-blue-500' : 'text-orange-500'} mr-3 flex-shrink-0`} size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular 
                        ? `bg-gradient-to-r ${activeTab === 'executive' ? 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' : 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'} text-white shadow-lg`
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}>
                      Choose Plan
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fast Tests */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Zap className="text-orange-500" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Fast Tests</h2>
              <Zap className="text-blue-500" size={32} />
            </div>
            <p className="text-xl text-gray-600">Last 20 days before exam - Quick revision tests</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-blue-500 to-orange-500 p-6">
              <h3 className="text-2xl font-bold text-white text-center">Lightning Fast Revision</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Level</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                      <div className="flex items-center justify-center space-x-2">
                        <BookOpen size={16} />
                        <span>Subject Wise (1 test)</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                      <div className="flex items-center justify-center space-x-2">
                        <Users size={16} />
                        <span>Single Group</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                      <div className="flex items-center justify-center space-x-2">
                        <Trophy size={16} />
                        <span>All Groups</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {fastTestPricing.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-6 font-semibold text-gray-900 text-lg">{row.level}</td>
                      <td className="px-6 py-6 text-center text-3xl font-bold text-blue-600">{row.subjectWise}</td>
                      <td className="px-6 py-6 text-center text-3xl font-bold text-orange-600">{row.singleGroup}</td>
                      <td className="px-6 py-6 text-center text-3xl font-bold text-purple-600">{row.allGroups}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Bento Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">Unique features that set us apart</p>
          </div>
          
          {/* Features Bento Grid */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* Flexible Access - Large */}
            <div className="col-span-12 lg:col-span-8 group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 opacity-5 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Calendar size={40} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Flexible Access</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Attempt tests till 31st May or 15th December as per your exam attempt. Study at your own pace with extended access.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Extended Access</span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Flexible Timeline</span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Self-Paced</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest ICSI Pattern - Medium */}
            <div className="col-span-12 lg:col-span-4 group bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-200 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500 opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10 text-center">
                <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Latest ICSI Pattern</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lengthy application-based questions, MCQs, and unseen questions thoroughly included
                </p>
              </div>
            </div>

            {/* Updated Amendments - Medium */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 group bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10 text-center">
                <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Updated Amendments</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All amendments applicable for June/December 2025 included in test papers
                </p>
              </div>
            </div>

            {/* Unlimited Doubts - Large */}
            <div className="col-span-12 md:col-span-6 lg:col-span-8 group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500 opacity-5 rounded-full translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="bg-green-100 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Unlimited Doubt Solving</h3>
                    <p className="text-gray-600">Get your doubts resolved till exams through multiple channels</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Discussion Groups</h4>
                    <p className="text-sm text-gray-600">Community-driven learning</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">1:1 Calls/Texts</h4>
                    <p className="text-sm text-gray-600">Personal attention</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Weekly Sessions</h4>
                    <p className="text-sm text-gray-600">Group strategy refinement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Mentorship - Medium */}
            <div className="col-span-12 md:col-span-6 lg:col-span-6 group bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-500 opacity-5 rounded-full -translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Mentorship</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  1:1 personalized guidance from experienced CS professionals with pre & post-test analysis
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span>Personalized guidance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span>Expert analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exam Ready - Medium */}
            <div className="col-span-12 md:col-span-6 lg:col-span-6 group bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-200 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-pink-500 opacity-5 rounded-full translate-y-14 translate-x-14"></div>
              <div className="relative z-10">
                <div className="bg-pink-100 text-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Exam-Ready Preparation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Structured preparation for December 2025, easily adaptable for June 2026
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">Dec 2025</span>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">June 2026</span>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">Structured Plan</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-300">Ready to ace your CS exams? Contact us now!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
              <a href="https://wa.me/919220191218" className="text-orange-400 hover:text-orange-300 font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>+91 9220191218</span>
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Instagram className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Instagram</h3>
              <a href="https://www.instagram.com/csexamwarriors?igsh=OW40eG9lazJuOWJx" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>@csexamwarriors</span>
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a href="mailto:csexamwarriors@gmail.com" className="text-orange-400 hover:text-orange-300 font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>csexamwarriors@gmail.com</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src="/IMG_20250407_112149.png" 
                alt="CS Exam Warriors Logo" 
                className="w-12 h-12 rounded-full"
              />
              <h2 className="text-3xl font-bold text-orange-400">CS Exam Warriors</h2>
            </div>
            <p className="text-gray-400 mb-8">Master your CS exams with expert guidance and comprehensive test series</p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">© 2024 CS Exam Warriors. All rights reserved. | Preparing Champions for CS Success</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;