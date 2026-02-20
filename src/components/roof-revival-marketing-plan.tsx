import { useState } from 'react';
import { FileText, BarChart, TrendingUp, Users, DollarSign, Package, Zap, ChevronRight, Shield, Droplets, Sun } from 'lucide-react';

const RoofCompanyPlan = () => {
  const [activeSection, setActiveSection] = useState('executive');

  const sections = [
    { id: 'executive', name: 'Executive Summary', icon: FileText },
    { id: 'products', name: 'Product Line', icon: Package },
    { id: 'brand', name: 'Brand & Process', icon: Shield },
    { id: 'market', name: 'Market Analysis', icon: BarChart },
    { id: 'segments', name: 'Customer Segments', icon: Users },
    { id: 'marketing', name: 'Marketing Strategy', icon: TrendingUp },
    { id: 'sales', name: 'Sales Execution', icon: Zap },
    { id: 'budget', name: 'Budget & KPIs', icon: DollarSign },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-2xl p-8 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-2">Roof Revival</h1>
              <p className="text-xl text-blue-100">Complete Marketing & Business Strategy Navigator</p>
              <p className="text-sm text-blue-200 mt-2">Climate-Specific Roof Coating Solutions | February 2026</p>
            </div>
            <Shield className="w-24 h-24 opacity-20" />
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-4 rounded-lg shadow-md transition-all transform hover:scale-105 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs font-semibold text-center">{section.name}</p>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          {activeSection === 'executive' && (
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Summary</h2>
              
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3">Roof Revival Overview</h3>
                <p className="text-lg leading-relaxed">
                  A revolutionary roof coating company offering climate-specific solutions that extend roof life by 10-15 years 
                  at 85-90% less cost than replacement. Our proprietary dual-product line serves both hot/dry and wet/rainy climates.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-2 border-orange-200">
                  <div className="flex items-center mb-4">
                    <Sun className="w-8 h-8 text-orange-600 mr-3" />
                    <h4 className="text-xl font-bold text-gray-900">SunShield™ Acrylic</h4>
                  </div>
                  <p className="text-gray-700 mb-3">Premium 100% acrylic elastomeric coating for hot, dry climates</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />
                      <span>Reflects 85%+ of UV rays, reduces energy costs by 25-35%</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />
                      <span>Crack-bridging technology withstands thermal expansion</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />
                      <span>~$28/gallon | Coverage: 50-75 sq ft/gal</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center mb-4">
                    <Droplets className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="text-xl font-bold text-gray-900">RainGuard™ Silicone</h4>
                  </div>
                  <p className="text-gray-700 mb-3">100% silicone waterproof coating for wet, rainy climates</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                      <span>Superior water resistance, won't degrade in standing water</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                      <span>Prevents moss/algae growth, self-cleaning properties</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                      <span>~$35/gallon | Coverage: 60-80 sq ft/gal</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Market Opportunity</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <p className="text-3xl font-bold text-blue-600">$342M</p>
                    <p className="text-xs text-gray-600">US Roof Coating Market (2022)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <p className="text-3xl font-bold text-green-600">4.3%</p>
                    <p className="text-xs text-gray-600">CAGR Growth Rate</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <p className="text-3xl font-bold text-orange-600">65M+</p>
                    <p className="text-xs text-gray-600">Owner-Occupied Homes</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <p className="text-3xl font-bold text-purple-600">85-90%</p>
                    <p className="text-xs text-gray-600">Cost Savings vs Replacement</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
                  <h5 className="font-bold text-gray-900 mb-2">Primary Goal</h5>
                  <p className="text-sm text-gray-600">Capture 2-3% of regional markets within 24 months through climate-specific positioning</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-600">
                  <h5 className="font-bold text-gray-900 mb-2">Lead Target</h5>
                  <p className="text-sm text-gray-600">Generate 200-300 qualified leads per month across all customer segments</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-600">
                  <h5 className="font-bold text-gray-900 mb-2">Conversion Rate</h5>
                  <p className="text-sm text-gray-600">Achieve 15-20% lead-to-customer conversion through education-first approach</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'products' && (
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Line Strategy</h2>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Climate-Specific Approach</h3>
                <p className="text-gray-700">
                  Unlike generic "one-size-fits-all" competitors, Roof Revival offers scientifically-formulated coatings 
                  optimized for specific climate challenges. This differentiation creates clear market positioning and 
                  reduces customer confusion.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-orange-200">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
                    <div className="flex items-center">
                      <Sun className="w-10 h-10 mr-3" />
                      <div>
                        <h3 className="text-2xl font-bold">SunShield™ Acrylic</h3>
                        <p className="text-sm">For Hot, Dry Climates</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Target Markets</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Phoenix, AZ</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Las Vegas, NV</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Inland CA</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Tucson, AZ</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Albuquerque, NM</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Dallas/Houston, TX</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Key Benefits</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>UV Reflection:</strong> 85%+ solar reflectance reduces roof temperature by 40-60°F</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Thermal Bridging:</strong> Flexes with expansion/contraction, prevents cracking</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Energy Savings:</strong> 25-35% reduction in cooling costs verified by DOE studies</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Breathable:</strong> Allows moisture vapor escape, prevents blistering</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Technical Specs</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-orange-50 p-3 rounded">
                          <p className="font-semibold text-orange-900">Price</p>
                          <p className="text-gray-700">$28/gallon retail</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded">
                          <p className="font-semibold text-orange-900">Coverage</p>
                          <p className="text-gray-700">50-75 sq ft/gal</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded">
                          <p className="font-semibold text-orange-900">Warranty</p>
                          <p className="text-gray-700">10-year transferable</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded">
                          <p className="font-semibold text-orange-900">Application</p>
                          <p className="text-gray-700">Brush, roller, spray</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Ideal For</h4>
                      <p className="text-sm text-gray-600">Asphalt shingles, metal roofs, concrete tile in areas with 250+ sunny days/year, minimal rainfall, and extreme summer heat (95°F+ averages)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-200">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-white">
                    <div className="flex items-center">
                      <Droplets className="w-10 h-10 mr-3" />
                      <div>
                        <h3 className="text-2xl font-bold">RainGuard™ Silicone</h3>
                        <p className="text-sm">For Wet, Rainy Climates</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Target Markets</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Seattle, WA</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Portland, OR</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Vancouver, BC</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">SF Bay Area</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Eastern Canada</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Gulf Coast</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Key Benefits</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Waterproof:</strong> 100% silicone won't absorb water, prevents rot and leaks</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Ponding Resistant:</strong> Performs in standing water, ideal for flat/low-slope roofs</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Algae/Moss Prevention:</strong> Biocide-enhanced formula stops organic growth</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Self-Cleaning:</strong> Rain washes away dirt, maintains appearance</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Technical Specs</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="font-semibold text-blue-900">Price</p>
                          <p className="text-gray-700">$35/gallon retail</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="font-semibold text-blue-900">Coverage</p>
                          <p className="text-gray-700">60-80 sq ft/gal</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="font-semibold text-blue-900">Warranty</p>
                          <p className="text-gray-700">12-year transferable</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="font-semibold text-blue-900">Application</p>
                          <p className="text-gray-700">Brush, roller, spray</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Ideal For</h4>
                      <p className="text-sm text-gray-600">All roof types in areas with 40+ inches annual rainfall, high humidity, frequent freeze-thaw cycles, or coastal salt exposure</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Pricing Strategy Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-white">
                      <tr>
                        <th className="p-3 text-left">Solution</th>
                        <th className="p-3 text-left">DIY Cost</th>
                        <th className="p-3 text-left">Professional Cost</th>
                        <th className="p-3 text-left">Life Extension</th>
                        <th className="p-3 text-left">ROI Period</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-white">
                        <td className="p-3 font-medium">Full Replacement</td>
                        <td className="p-3">N/A</td>
                        <td className="p-3">$8,000-$15,000</td>
                        <td className="p-3">20-30 years</td>
                        <td className="p-3">10-15 years</td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="p-3 font-medium">SunShield DIY</td>
                        <td className="p-3">$200-$450</td>
                        <td className="p-3">N/A</td>
                        <td className="p-3">8-12 years</td>
                        <td className="p-3">1-2 years</td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="p-3 font-medium">SunShield Pro</td>
                        <td className="p-3">N/A</td>
                        <td className="p-3">$600-$1,200</td>
                        <td className="p-3">10-15 years</td>
                        <td className="p-3">2-3 years</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-3 font-medium">RainGuard DIY</td>
                        <td className="p-3">$250-$550</td>
                        <td className="p-3">N/A</td>
                        <td className="p-3">10-15 years</td>
                        <td className="p-3">1-2 years</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-3 font-medium">RainGuard Pro</td>
                        <td className="p-3">N/A</td>
                        <td className="p-3">$800-$1,500</td>
                        <td className="p-3">12-18 years</td>
                        <td className="p-3">2-4 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'brand' && (
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Brand Strategy & Proprietary Process</h2>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3">Brand Positioning</h3>
                <p className="text-lg">
                  "The Climate-Smart Roof Protection Experts" - We don't sell generic coatings. We provide scientifically-matched 
                  solutions that address your specific climate challenges, backed by our proprietary ClimateMatch™ Assessment Process.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg text-blue-600 mb-3">Brand Promise</h4>
                  <p className="text-gray-700 text-sm">
                    "Your roof faces unique challenges. Our coatings are engineered for YOUR climate, not everyone's. 
                    Get the right protection, the first time."
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg text-green-600 mb-3">Brand Values</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Scientific precision</li>
                    <li>• Climate expertise</li>
                    <li>• Cost transparency</li>
                    <li>• Customer education</li>
                    <li>• Environmental responsibility</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg text-purple-600 mb-3">Brand Personality</h4>
                  <p className="text-gray-700 text-sm">
                    Knowledgeable, trustworthy, approachable. The friendly expert who explains complex concepts simply 
                    and never pressures you.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ClimateMatch™ Proprietary Assessment Process</h3>
                <p className="text-gray-700 mb-6">
                  Our 6-step diagnostic system that differentiates us from competitors and builds customer confidence through 
                  scientific precision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start bg-green-50 p-4 rounded-lg">
                    <div className="bg-green-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                    <div>
                      <h5 className="font-bold text-gray-900">Climate Analysis</h5>
                      <p className="text-sm text-gray-600">Review local weather data: annual rainfall, temperature extremes, UV index, humidity levels, freeze-thaw frequency</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                    <div>
                      <h5 className="font-bold text-gray-900">Roof Inspection</h5>
                      <p className="text-sm text-gray-600">Assess current condition: material type, age, existing damage, slope, drainage, previous repairs</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-purple-50 p-4 rounded-lg">
                    <div className="bg-purple-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                    <div>
                      <h5 className="font-bold text-gray-900">Product Matching</h5>
                      <p className="text-sm text-gray-600">Match roof condition + climate data to SunShield or RainGuard using our decision matrix</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-orange-50 p-4 rounded-lg">
                    <div className="bg-orange-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                    <div>
                      <h5 className="font-bold text-gray-900">Cost-Benefit Analysis</h5>
                      <p className="text-sm text-gray-600">Calculate ROI: coating cost vs. replacement cost vs. projected energy savings vs. extended roof life</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-cyan-50 p-4 rounded-lg">
                    <div className="bg-cyan-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</div>
                    <div>
                      <h5 className="font-bold text-gray-900">Application Plan</h5>
                      <p className="text-sm text-gray-600">Detail surface prep requirements, number of coats needed, optimal application timing, curing conditions</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-pink-50 p-4 rounded-lg">
                    <div className="bg-pink-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">6</div>
                    <div>
                      <h5 className="font-bold text-gray-900">Warranty & Maintenance</h5>
                      <p className="text-sm text-gray-600">Issue transferable warranty, provide maintenance schedule, schedule 5-year re-inspection</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Competitive Differentiation</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-white">
                      <tr>
                        <th className="p-3 text-left">Feature</th>
                        <th className="p-3 text-left">Roof Revival</th>
                        <th className="p-3 text-left">Generic Competitors</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-white">
                        <td className="p-3 font-medium">Product Strategy</td>
                        <td className="p-3 text-green-700">Climate-specific formulas</td>
                        <td className="p-3 text-gray-500">One-size-fits-all</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-medium">Assessment</td>
                        <td className="p-3 text-green-700">ClimateMatch™ 6-step process</td>
                        <td className="p-3 text-gray-500">Basic visual inspection</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-medium">Education</td>
                        <td className="p-3 text-green-700">Comprehensive customer guides</td>
                        <td className="p-3 text-gray-500">Product data sheet only</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-medium">Warranty</td>
                        <td className="p-3 text-green-700">10-12 year transferable</td>
                        <td className="p-3 text-gray-500">5 year non-transferable</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-medium">Pricing</td>
                        <td className="p-3 text-green-700">Transparent, ROI calculator</td>
                        <td className="p-3 text-gray-500">Hidden costs, vague quotes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

{activeSection === 'market' && (
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Analysis & Opportunity</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-3xl font-bold mb-2">$342M</h4>
                  <p className="text-sm">US Roof Coating Market (2022)</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-3xl font-bold mb-2">4.3%</h4>
                  <p className="text-sm">Annual Growth Rate (CAGR)</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-3xl font-bold mb-2">65M+</h4>
                  <p className="text-sm">Owner-Occupied Homes (US)</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Priority Geographic Markets</h3>
                
                <div className="space-y-4">
                  <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900">SunShield Markets (Hot/Dry)</h4>
                      <Sun className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-sm text-orange-900 mb-2">Tier 1 Priority</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Phoenix, AZ (500K+ homes, extreme heat)</li>
                          <li>• Las Vegas, NV (350K+ homes, UV intensity)</li>
                          <li>• Inland Empire, CA (600K+ homes, dry heat)</li>
                          <li>• Los Angeles, CA (1.2M+ homes, established)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-orange-900 mb-2">Tier 2 Expansion</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Tucson, AZ (150K+ homes)</li>
                          <li>• Albuquerque, NM (120K+ homes)</li>
                          <li>• Dallas/Houston, TX (800K+ homes)</li>
                          <li>• Sacramento, CA (200K+ homes)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900">RainGuard Markets (Wet/Rainy)</h4>
                      <Droplets className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-sm text-blue-900 mb-2">Tier 1 Priority</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Seattle, WA (400K+ homes, 38" rainfall)</li>
                          <li>• Portland, OR (300K+ homes, 43" rainfall)</li>
                          <li>• Vancouver, BC (250K+ homes, coastal)</li>
                          <li>• SF Bay Area, CA (800K+ homes)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-blue-900 mb-2">Tier 2 Expansion</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Toronto/Montreal, ON (500K+ homes)</li>
                          <li>• New Orleans, LA (Gulf humidity)</li>
                          <li>• Atlantic Coast markets (humidity)</li>
                          <li>• Pacific NW smaller cities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Drivers & Trends</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-green-700 mb-3">Growth Accelerators</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Economic Pressure:</strong> Inflation makes $10K+ roof replacement unaffordable for many</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Energy Costs:</strong> Rising utility bills drive interest in reflective coatings</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Climate Events:</strong> Extreme weather increases awareness of roof protection</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Aging Stock:</strong> 50% of US homes have 15+ year old roofs</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Sustainability:</strong> ESG mandates, LEED certification demand</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-3">Market Challenges</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                        <span><strong>Low Awareness:</strong> 60%+ homeowners unaware roof coatings exist</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                        <span><strong>Skepticism:</strong> Perceived as "temporary fix" vs. replacement</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                        <span><strong>Roofer Resistance:</strong> Traditional contractors prefer replacement revenue</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
                        <span><strong>Quality Variance:</strong> Poor contractor execution damages category reputation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Landscape</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow">
                    <h5 className="font-bold text-blue-700 mb-2">National Brands</h5>
                    <p className="text-xs text-gray-600 mb-2">GacoRoof, Henry, Kool Seal</p>
                    <p className="text-xs text-gray-600"><strong>Weakness:</strong> Generic products, no climate specialization, dealer-dependent quality</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <h5 className="font-bold text-green-700 mb-2">Local Contractors</h5>
                    <p className="text-xs text-gray-600 mb-2">Regional painting/roofing companies</p>
                    <p className="text-xs text-gray-600"><strong>Weakness:</strong> No brand recognition, inconsistent service, limited marketing</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <h5 className="font-bold text-purple-700 mb-2">DIY Products</h5>
                    <p className="text-xs text-gray-600 mb-2">Home Depot/Lowe's shelf products</p>
                    <p className="text-xs text-gray-600"><strong>Weakness:</strong> No guidance, poor results from improper application</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'segments' && (
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Segments & Targeting</h2>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Four-Segment Strategy</h3>
                <p className="text-gray-700">
                  We target four distinct customer groups, each with unique motivations, buying cycles, and messaging needs. 
                  This multi-channel approach maximizes market penetration and revenue diversification.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Segment 1: Homeowners</h3>
                    <div className="bg-green-100 px-4 py-2 rounded-full">
                      <p className="text-xs font-semibold text-green-800">PRIMARY - 70% Revenue</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Demographics</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Age:</strong> 45-65 years</li>
                        <li>• <strong>Income:</strong> $75K-$150K</li>
                        <li>• <strong>Home Value:</strong> $350K-$750K</li>
                        <li>• <strong>Roof Age:</strong> 10-20 years</li>
                        <li>• <strong>Tenure:</strong> 10+ years in home</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Pain Points</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Can't afford $10K-15K replacement</li>
                        <li>• Worried about roof failure/leaks</li>
                        <li>• High energy bills in summer</li>
                        <li>• Don't want financing debt</li>
                        <li>• Confused by roofing options</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Value Proposition</h4>
                      <p className="text-sm text-gray-700 bg-green-50 p-3 rounded">
                        "Extend your roof life 10-15 years for $500-$1,500 instead of $10K-15K replacement. 
                        Save 25-35% on energy bills. Climate-matched protection backed by transferable warranty."
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <h5 className="font-bold text-gray-900 mb-2">Messaging Strategy</h5>
                    <p className="text-sm text-gray-700"><strong>Headline:</strong> "Your Roof Doesn't Need Replacing. It Needs Climate-Matched Protection."</p>
                    <p className="text-sm text-gray-700 mt-2"><strong>Proof Points:</strong> Cost savings calculator, energy bill comparison, before/after photos, customer testimonials</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Segment 2: Real Estate Agents</h3>
                    <div className="bg-blue-100 px-4 py-2 rounded-full">
                      <p className="text-xs font-semibold text-blue-800">SECONDARY - 20% Revenue</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Profile</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Active residential agents</li>
                        <li>• 5+ transactions/year</li>
                        <li>• Listing agents (not buyers)</li>
                        <li>• Focus on older home inventory</li>
                        <li>• Reputation-driven</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Pain Points</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Roof issues kill deals</li>
                        <li>• Inspection failures delay close</li>
                        <li>• Sellers resist big repairs</li>
                        <li>• Lost commissions on fallthrough</li>
                        <li>• Need quick solutions</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Value Proposition</h4>
                      <p className="text-sm text-gray-700 bg-blue-50 p-3 rounded">
                        "Save deals with $800 coating vs. $10K replacement. Pass inspections. Close faster. 
                        Transferable warranty adds value. Earn $50-100 referral fee per project."
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <h5 className="font-bold text-gray-900 mb-2">Partner Program</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-gray-900">Benefits:</p>
                        <ul className="text-gray-700 space-y-1 mt-1">
                          <li>• $50-100 referral bonus/project</li>
                          <li>• Free pre-listing assessments</li>
                          <li>• 48-hour turnaround guarantee</li>
                          <li>• Co-branded marketing materials</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Activation:</p>
                        <ul className="text-gray-700 space-y-1 mt-1">
                          <li>• CE workshops at brokerages</li>
                          <li>• Agent toolkit (one-pagers, FAQs)</li>
                          <li>• MLS association sponsorships</li>
                          <li>• LinkedIn outreach campaigns</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Segment 3: Home Warranty Companies</h3>
                    <div className="bg-purple-100 px-4 py-2 rounded-full">
                      <p className="text-xs font-semibold text-purple-800">B2B - 5% Revenue (Year 1)</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Target Companies</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• American Home Shield</li>
                        <li>• First American</li>
                        <li>• Choice Home Warranty</li>
                        <li>• Old Republic</li>
                        <li>• Regional providers</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Pain Points</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Roof claims cost $3K-$8K avg</li>
                        <li>• High claim frequency</li>
                        <li>• Customer dissatisfaction</li>
                        <li>• Competitive pressure</li>
                        <li>• Limited prevention options</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Value Proposition</h4>
                      <p className="text-sm text-gray-700 bg-purple-50 p-3 rounded">
                        "Reduce claim exposure 40-60% by offering preventive coating as \$8-15/mo add-on. 
                        Differentiate plans. Improve customer satisfaction. Lower overall claim costs."
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <h5 className="font-bold text-gray-900 mb-2">Partnership Model</h5>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>6-Month Pilot:</strong> Phoenix market test with one company</p>
                      <p className="mb-2"><strong>Revenue Share:</strong> 60/40 split on coating service fees</p>
                      <p><strong>Co-Marketing:</strong> Branded materials showing proactive roof protection commitment</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Segment 4: Home Insurance Companies</h3>
                    <div className="bg-orange-100 px-4 py-2 rounded-full">
                      <p className="text-xs font-semibold text-orange-800">B2B - 5% Revenue (Year 1)</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Target Companies</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• State Farm</li>
                        <li>• Allstate</li>
                        <li>• USAA</li>
                        <li>• Farmers</li>
                        <li>• Liberty Mutual</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Pain Points</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Roof claims = highest cost</li>
                        <li>• Climate risk exposure rising</li>
                        <li>• Regulatory pressure on rates</li>
                        <li>• Need loss prevention</li>
                        <li>• Competitive differentiation</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Value Proposition</h4>
                      <p className="text-sm text-gray-700 bg-orange-50 p-3 rounded">
                        "Offer 5-10% premium discount for certified coating. Reduce claim frequency and severity. 
                        Demonstrate loss prevention leadership. Improve customer retention."
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <h5 className="font-bold text-gray-900 mb-2">Program Structure</h5>
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Discount Program:</strong> 5-10% premium reduction for coating certification</p>
                      <p className="mb-2"><strong>Claims Data:</strong> Build actuarial model showing 30-50% claim reduction</p>
                      <p><strong>Certification:</strong> Homeowners submit proof of Roof Revival coating + warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'marketing' && (
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Marketing Channel Strategy</h2>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Integrated Multi-Channel Approach</h3>
                <p>Combine digital advertising, content marketing, partnerships, and data-driven optimization to reach 
                all four customer segments with tailored messaging.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-blue-600 mb-4">Google Search Ads</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">High-Intent Keywords</p>
                      <p className="text-xs text-gray-600">roof coating near me, extend roof life, alternative to roof replacement, acrylic roof coating, silicone roof coating</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Comparison Keywords</p>
                      <p className="text-xs text-gray-600">roof coating vs replacement cost, how much does roof coating cost, DIY roof coating</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Climate-Specific</p>
                      <p className="text-xs text-gray-600">roof coating Phoenix, roof coating Seattle, silicone roof coating rainy climate</p>
                    </div>
                    <div className="text-sm text-gray-700 mt-3">
                      <p><strong>Budget:</strong> $1,500-$3,000/month</p>
                      <p><strong>Target CPA:</strong> $25-$50</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-green-600 mb-4">Facebook/Instagram Ads</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Audience Targeting</p>
                      <p className="text-xs text-gray-600">Homeowners age 45-65, household income $75K+, interest in home improvement, home value $350K+</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Ad Formats</p>
                      <p className="text-xs text-gray-600">Before/after carousels, cost comparison graphics, video testimonials, thermal imaging visuals</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Retargeting</p>
                      <p className="text-xs text-gray-600">Website visitors, video viewers, lead form abandoners</p>
                    </div>
                    <div className="text-sm text-gray-700 mt-3">
                      <p><strong>Budget:</strong> $1,000-$2,500/month</p>
                      <p><strong>Target CPA:</strong> $15-$35</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-purple-600 mb-4">YouTube Marketing</h4>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Content Strategy</p>
                      <p className="text-xs text-gray-600">"How to Coat Your Roof in a Weekend" DIY series, ClimateMatch process explainer, customer success stories</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Pre-Roll Ads</p>
                      <p className="text-xs text-gray-600">Target home improvement channels, before/after 15-sec spots, cost comparison messages</p>
                    </div>
                    <div className="text-sm text-gray-700 mt-3">
                      <p><strong>Budget:</strong> $500-$1,500/month</p>
                      <p><strong>Target CPV:</strong> $0.05-$0.15</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">Nextdoor Advertising</h4>
                  <div className="space-y-3">
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Hyperlocal Targeting</p>
                      <p className="text-xs text-gray-600">Neighborhoods with 20+ year old housing stock, by climate zone, homeowner-only</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Messaging</p>
                      <p className="text-xs text-gray-600">"Your neighbors are protecting their roofs. Here's how." Neighborhood-specific offers and case studies</p>
                    </div>
                    <div className="text-sm text-gray-700 mt-3">
                      <p><strong>Budget:</strong> $300-$800/month</p>
                      <p><strong>Target CPA:</strong> $20-$40</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-cyan-600 mb-4">LinkedIn (B2B)</h4>
                  <div className="space-y-3">
                    <div className="bg-cyan-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Target Audiences</p>
                      <p className="text-xs text-gray-600">Real estate agents, property managers, insurance/warranty company executives, facility managers</p>
                    </div>
                    <div className="bg-cyan-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Content Types</p>
                      <p className="text-xs text-gray-600">Case studies, ROI calculators, partnership proposals, industry insights, agent toolkits</p>
                    </div>
                    <div className="text-sm text-gray-700 mt-3">
                      <p><strong>Budget:</strong> $500-$1,000/month</p>
                      <p><strong>Target CPA:</strong> $50-$100</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-pink-600 mb-4">Content Marketing</h4>
                  <div className="space-y-3">
                    <div className="bg-pink-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Blog Topics</p>
                      <p className="text-xs text-gray-600">"5 Signs Your Roof Needs Coating," "SunShield vs RainGuard Guide," "Energy Savings Calculator," "Climate Zone Roof Guide"</p>
                    </div>
                    <div className="bg-pink-50 p-3 rounded">
                      <p className="font-semibold text-sm text-gray-900">Lead Magnets</p>
                      <p className="text-xs text-gray-600">Free roof assessment checklist, ROI calculator tool, Climate-matched coating guide PDF</p>
                    </div>
                    <div className="text-sm text-gray-700 mt-3">
                      <p><strong>SEO Focus:</strong> Long-tail keywords, local intent</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ad Creative Concepts</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
                    <h5 className="font-bold text-gray-900 mb-2">Concept 1: "The $800 vs $15,000 Decision"</h5>
                    <p className="text-sm text-gray-700 mb-2"><strong>Visual:</strong> Split screen - stressed homeowner with $15K estimate vs. smiling family with $800 coating quote</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Headline:</strong> "Your Roof Doesn't Need Replacing. It Needs The Right Climate Protection."</p>
                    <p className="text-sm text-gray-700"><strong>CTA:</strong> "Get Free ClimateMatch Assessment"</p>
                  </div>

                  <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
                    <h5 className="font-bold text-gray-900 mb-2">Concept 2: "The Coolest House on the Block"</h5>
                    <p className="text-sm text-gray-700 mb-2"><strong>Visual:</strong> Thermal aerial image showing one cool blue roof surrounded by red/orange neighbors</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Headline:</strong> "SunShield Coating: 40°F Cooler Roof, 30% Lower Energy Bills"</p>
                    <p className="text-sm text-gray-700"><strong>CTA:</strong> "Calculate Your Savings"</p>
                  </div>

                  <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
                    <h5 className="font-bold text-gray-900 mb-2">Concept 3: "Weekend Warrior DIY"</h5>
                    <p className="text-sm text-gray-700 mb-2"><strong>Visual:</strong> Time-lapse of homeowner coating roof Saturday morning to Sunday afternoon</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Headline:</strong> "Protect Your Roof This Weekend for Less Than Your Last Home Depot Run"</p>
                    <p className="text-sm text-gray-700"><strong>CTA:</strong> "Find Roof Revival Products Near You"</p>
                  </div>

                  <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
                    <h5 className="font-bold text-gray-900 mb-2">Concept 4: "Agent Save The Deal"</h5>
                    <p className="text-sm text-gray-700 mb-2"><strong>Visual:</strong> Inspection report with red "ROOF FAILURE" stamp, then hand stamping "RESOLVED" over it</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Headline:</strong> "Roof Issues Kill Deals. $800 Coating Saves $15,000 Problem."</p>
                    <p className="text-sm text-gray-700"><strong>CTA:</strong> "Download Agent Partnership Guide"</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">A/B Testing Framework</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Test Variables:</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Headlines: Cost savings vs energy efficiency vs climate protection</li>
                      <li>• Visuals: Before/after vs thermal imaging vs DIY action vs professional</li>
                      <li>• CTAs: "Free quote" vs "Calculate savings" vs "Get assessment"</li>
                      <li>• Audiences: Age brackets, income levels, home age, climate zones</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Testing Protocol:</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Minimum 1,000 impressions per variant</li>
                      <li>• Run 7-14 days before declaring winner</li>
                      <li>• Track: CTR, CPA, conversion rate, quality score</li>
                      <li>• Scale winners 2-3x, kill losers quickly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'sales' && (
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sales Execution Plan</h2>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales Funnel by Segment</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-3 text-left">Stage</th>
                        <th className="p-3 text-left">Homeowners</th>
                        <th className="p-3 text-left">RE Agents</th>
                        <th className="p-3 text-left">Warranty Cos</th>
                        <th className="p-3 text-left">Insurance Cos</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3 font-medium">Awareness</td>
                        <td className="p-3">Google/Facebook ads, YouTube, blog, retail displays</td>
                        <td className="p-3">LinkedIn, brokerage presentations, CE events</td>
                        <td className="p-3">Industry conferences, direct outreach, white papers</td>
                        <td className="p-3">Insurance conferences, loss prevention forums, data reports</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 font-medium">Interest</td>
                        <td className="p-3">Free ClimateMatch assessment, ROI calculator</td>
                        <td className="p-3">Agent toolkit download, referral program signup</td>
                        <td className="p-3">Pilot program proposal, claims data analysis</td>
                        <td className="p-3">Premium discount model, actuarial study</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Decision</td>
                        <td className="p-3">Quote, testimonials, warranty info, financing options</td>
                        <td className="p-3">First referral experience, fast turnaround demo</td>
                        <td className="p-3">Contract negotiation, co-marketing materials</td>
                        <td className="p-3">Underwriting review, legal approval, pilot terms</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 font-medium">Action</td>
                        <td className="p-3">Book DIY or professional service</td>
                        <td className="p-3">Ongoing referrals, marketing toolkit usage</td>
                        <td className="p-3">Program launch, member communications</td>
                        <td className="p-3">Discount program rollout, policyholder outreach</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Retention</td>
                        <td className="p-3">5-year re-inspection, maintenance tips, re-coating offers</td>
                        <td className="p-3">Quarterly check-ins, updated collateral, performance reports</td>
                        <td className="p-3">Monthly performance reviews, claims tracking, expansion discussions</td>
                        <td className="p-3">Annual claims analysis, program optimization, market expansion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Pricing Structure</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold text-blue-900 mb-2">DIY Products</h5>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>SunShield:</strong> $28/gal retail (50-75 sq ft coverage)</p>
                        <p><strong>RainGuard:</strong> $35/gal retail (60-80 sq ft coverage)</p>
                        <p><strong>Avg Project:</strong> $200-$550 depending on roof size</p>
                        <p><strong>Margin:</strong> 30-40% through retail partners</p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded">
                      <h5 className="font-semibold text-green-900 mb-2">Professional Installation</h5>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>SunShield:</strong> $600-$1,200 (materials + labor)</p>
                        <p><strong>RainGuard:</strong> $800-$1,500 (materials + labor)</p>
                        <p><strong>Typical Roof:</strong> 1,500-2,500 sq ft residential</p>
                        <p><strong>Margin:</strong> 50-60% on installed jobs</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded">
                      <h5 className="font-semibold text-purple-900 mb-2">Agent Referrals</h5>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>Pricing:</strong> $500-$800 (volume discount)</p>
                        <p><strong>Agent Fee:</strong> $50-100 per completed project</p>
                        <p><strong>Turnaround:</strong> 48-hour guarantee</p>
                        <p><strong>Margin:</strong> 45-55% after referral fee</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Conversion Optimization</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Lead Nurture Sequence (5 Emails)</h5>
                      <ol className="text-sm text-gray-700 space-y-2">
                        <li><strong>Day 0:</strong> Welcome + ClimateMatch explainer + assessment booking link</li>
                        <li><strong>Day 2:</strong> Cost comparison infographic + customer testimonial video</li>
                        <li><strong>Day 5:</strong> "How It Works" step-by-step guide + energy savings data</li>
                        <li><strong>Day 8:</strong> FAQ + warranty details + financing options</li>
                        <li><strong>Day 12:</strong> Limited-time offer (10% off or free upgrade to pro install)</li>
                      </ol>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Objection Handling</h5>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-medium">"Isn't this just delaying the inevitable?"</p>
                          <p className="text-xs">Response: Show 10-15 year extension data + transferable warranty value at resale</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-medium">"How do I know it will work?"</p>
                          <p className="text-xs">Response: Before/after thermal imaging + 10-12 year warranty + local case studies</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-medium">"Can't I just use cheaper paint?"</p>
                          <p className="text-xs">Response: Explain climate-specific formulation + penetration vs surface coating + warranty difference</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">90-Day Launch Roadmap</h3>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-600 text-white font-bold rounded-full w-20 h-8 flex items-center justify-center mr-4 text-sm">Days 1-30</div>
                      <h5 className="font-bold text-gray-900">Foundation & Setup</h5>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div>
                        <p className="font-semibold mb-1">Actions:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Finalize product formulations & suppliers</li>
                          <li>• Launch homeowner survey (500+ responses)</li>
                          <li>• Set up HubSpot CRM + tracking</li>
                          <li>• Build landing pages + ROI calculator</li>
                          <li>• Create first 10 ad creatives</li>
                          <li>• Identify 20 agents for outreach</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Success Metrics:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• 500 survey responses</li>
                          <li>• Landing pages live with analytics</li>
                          <li>• 10 agent contacts made</li>
                          <li>• First test application completed</li>
                          <li>• 5 before/after photo sets</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-600 text-white font-bold rounded-full w-20 h-8 flex items-center justify-center mr-4 text-sm">Days 31-60</div>
                      <h5 className="font-bold text-gray-900">Launch & Optimize</h5>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div>
                        <p className="font-semibold mb-1">Actions:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Launch Google & Facebook ads (Tier 1 markets)</li>
                          <li>• Host first agent workshop</li>
                          <li>• Publish 5 blog posts + 3 videos</li>
                          <li>• Begin warranty/insurance outreach</li>
                          <li>• A/B test ad creative variants</li>
                          <li>• Set up retail distribution (3-5 stores)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Success Metrics:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• 75-100 qualified leads</li>
                          <li>• 5 agent referral signups</li>
                          <li>• 10-15 completed projects</li>
                          <li>• 3 warranty company calls scheduled</li>
                          <li>• CPA under $45</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow">
                    <div className="flex items-center mb-3">
                      <div className="bg-purple-600 text-white font-bold rounded-full w-20 h-8 flex items-center justify-center mr-4 text-sm">Days 61-90</div>
                      <h5 className="font-bold text-gray-900">Scale & Expand</h5>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div>
                        <p className="font-semibold mb-1">Actions:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Scale winning ad campaigns 2-3x</li>
                          <li>• Launch YouTube content series</li>
                          <li>• Expand to Tier 2 markets</li>
                          <li>• Submit warranty pilot proposal</li>
                          <li>• Collect 10+ video testimonials</li>
                          <li>• Begin hiring certified applicators</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Success Metrics:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• 150-200 qualified leads/month</li>
                          <li>• 30-40 completed projects</li>
                          <li>• 15 active referring agents</li>
                          <li>• 1 warranty pilot proposal submitted</li>
                          <li>• 4.5+ star review average</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'budget' && (
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Budget Allocation & KPIs</h2>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Marketing Budget: $4,100 - $9,400</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div>
                      <p className="font-bold text-blue-900">Google Search Ads</p>
                      <p className="text-sm text-gray-600">High-intent keywords, comparison terms, climate-specific</p>
                    </div>
                    <p className="text-2xl font-bold text-blue-700">$1,500-3,000</p>
                  </div>

                  <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                    <div>
                      <p className="font-bold text-green-900">Facebook/Instagram Ads</p>
                      <p className="text-sm text-gray-600">Homeowner targeting, before/after content, retargeting</p>
                    </div>
                    <p className="text-2xl font-bold text-green-700">$1,000-2,500</p>
                  </div>

                  <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                    <div>
                      <p className="font-bold text-purple-900">YouTube Ads</p>
                      <p className="text-sm text-gray-600">Pre-roll, DIY tutorials, testimonials</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-700">$500-1,500</p>
                  </div>

                  <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
                    <div>
                      <p className="font-bold text-orange-900">Nextdoor Ads</p>
                      <p className="text-sm text-gray-600">Hyperlocal neighborhood targeting</p>
                    </div>
                    <p className="text-2xl font-bold text-orange-700">$300-800</p>
                  </div>

                  <div className="flex items-center justify-between bg-gradient-to-r from-cyan-50 to-cyan-100 p-4 rounded-lg">
                    <div>
                      <p className="font-bold text-cyan-900">LinkedIn (B2B)</p>
                      <p className="text-sm text-gray-600">Agents, warranty/insurance companies</p>
                    </div>
                    <p className="text-2xl font-bold text-cyan-700">$500-1,000</p>
                  </div>

                  <div className="flex items-center justify-between bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg">
                    <div>
                      <p className="font-bold text-pink-900">Tools & Software</p>
                      <p className="text-sm text-gray-600">CRM, analytics, automation, survey tools</p>
                    </div>
                    <p className="text-2xl font-bold text-pink-700">$300-600</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Performance Indicators (KPIs)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gradient-to-r from-blue-100 to-purple-100">
                      <tr>
                        <th className="p-3 text-left">KPI Category</th>
                        <th className="p-3 text-left">Metric</th>
                        <th className="p-3 text-left">30-Day Target</th>
                        <th className="p-3 text-left">90-Day Target</th>
                        <th className="p-3 text-left">Year 1 Goal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-white">
                        <td className="p-3 font-semibold">Lead Generation</td>
                        <td className="p-3">Total qualified leads/month</td>
                        <td className="p-3">50-75</td>
                        <td className="p-3">150-200</td>
                        <td className="p-3">300-400</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 font-semibold">Conversion</td>
                        <td className="p-3">Lead-to-customer rate</td>
                        <td className="p-3">8-10%</td>
                        <td className="p-3">12-15%</td>
                        <td className="p-3">18-22%</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-semibold">Ad Performance</td>
                        <td className="p-3">Cost per lead (CPL)</td>
                        <td className="p-3">&lt;$45</td>
                        <td className="p-3">&lt;$35</td>
                        <td className="p-3">&lt;$30</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 font-semibold">Revenue</td>
                        <td className="p-3">Monthly project revenue</td>
                        <td className="p-3">$5,000</td>
                        <td className="p-3">$20,000</td>
                        <td className="p-3">$80,000-100,000</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-semibold">Agent Program</td>
                        <td className="p-3">Active referring agents</td>
                        <td className="p-3">5</td>
                        <td className="p-3">15-20</td>
                        <td className="p-3">50-75</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 font-semibold">Customer Satisfaction</td>
                        <td className="p-3">Google review rating</td>
                        <td className="p-3">4.5+ stars</td>
                        <td className="p-3">4.7+ stars</td>
                        <td className="p-3">4.8+ stars</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-semibold">B2B Pipeline</td>
                        <td className="p-3">Warranty/Insurance meetings</td>
                        <td className="p-3">3</td>
                        <td className="p-3">8-10</td>
                        <td className="p-3">2-3 signed partnerships</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 font-semibold">Market Share</td>
                        <td className="p-3">% of regional market captured</td>
                        <td className="p-3">0.1%</td>
                        <td className="p-3">0.5%</td>
                        <td className="p-3">2-3%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Revenue Projections (Year 1)</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white p-4 rounded">
                      <p className="font-semibold text-gray-900 mb-2">Q1 (Months 1-3)</p>
                      <p className="text-gray-700">Build foundation, test markets, optimize campaigns</p>
                      <p className="text-2xl font-bold text-green-600 mt-2">$30,000 - $50,000</p>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <p className="font-semibold text-gray-900 mb-2">Q2 (Months 4-6)</p>
                      <p className="text-gray-700">Scale winning channels, expand geographic footprint</p>
                      <p className="text-2xl font-bold text-green-600 mt-2">$120,000 - $180,000</p>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <p className="font-semibold text-gray-900 mb-2">Q3-Q4 (Months 7-12)</p>
                      <p className="text-gray-700">Peak season, agent network mature, B2B pilots</p>
                      <p className="text-2xl font-bold text-green-600 mt-2">$400,000 - $600,000</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded">
                      <p className="font-semibold mb-2">Total Year 1 Revenue</p>
                      <p className="text-3xl font-bold">$550,000 - $830,000</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Data Collection & Tech Stack</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-blue-900">Survey Platform</p>
                      <p className="text-gray-600">Typeform or Google Forms (homeowner & agent surveys)</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-blue-900">CRM</p>
                      <p className="text-gray-600">HubSpot Free CRM (track all 4 segments, manage pipeline)</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-blue-900">Analytics</p>
                      <p className="text-gray-600">Google Analytics 4 + Tag Manager on landing pages</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-blue-900">Ad Tracking</p>
                      <p className="text-gray-600">Meta Pixel + Google Ads conversion tracking</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-blue-900">Visualization</p>
                      <p className="text-gray-600">Google Looker Studio (free dashboards) or Plotly</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded">
                      <p className="font-semibold text-blue-900">Total Monthly Cost</p>
                      <p className="text-blue-700 font-bold">$300-600 (included in budget above)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Immediate Next Steps (Week 1)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start bg-white p-3 rounded shadow">
                      <div className="bg-red-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">1</div>
                      <div>
                        <p className="font-semibold text-gray-900">Finalize Product Formulations</p>
                        <p className="text-xs text-gray-600">Lock in SunShield & RainGuard suppliers, pricing, specs</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded shadow">
                      <div className="bg-orange-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">2</div>
                      <div>
                        <p className="font-semibold text-gray-900">Build Homeowner Survey</p>
                        <p className="text-xs text-gray-600">Typeform with questions from data collection section</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded shadow">
                      <div className="bg-yellow-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">3</div>
                      <div>
                        <p className="font-semibold text-gray-900">Set Up HubSpot CRM</p>
                        <p className="text-xs text-gray-600">Create pipelines for all 4 customer segments</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded shadow">
                      <div className="bg-green-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">4</div>
                      <div>
                        <p className="font-semibold text-gray-900">Register Domain & Build Landing Page</p>
                        <p className="text-xs text-gray-600">ROI calculator, ClimateMatch explainer, lead capture forms</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start bg-white p-3 rounded shadow">
                      <div className="bg-cyan-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">5</div>
                      <div>
                        <p className="font-semibold text-gray-900">Keyword Research</p>
                        <p className="text-xs text-gray-600">Google Keyword Planner for all target markets</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded shadow">
                      <div className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">6</div>
                      <div>
                        <p className="font-semibold text-gray-900">Design First Ad Creatives</p>
                        <p className="text-xs text-gray-600">3 Facebook/Instagram concepts from marketing section</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded shadow">
                      <div className="bg-purple-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">7</div>
                      <div>
                        <p className="font-semibold text-gray-900">Test Application</p>
                        <p className="text-xs text-gray-600">Apply to demo roof, document process, capture photos/video</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded shadow">
                      <div className="bg-pink-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">8</div>
                      <div>
                        <p className="font-semibold text-gray-900">Agent Outreach List</p>
                        <p className="text-xs text-gray-600">Identify 20 agents in Phoenix for initial partnerships</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoofCompanyPlan;