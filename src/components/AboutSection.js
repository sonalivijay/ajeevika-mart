import React from "react";
import MetricFooter from "./MetricFooter";
import GradientDivider from "./GradientDivider";

export default function AboutSection() {
  return (
    <div className="container p-4 rounded my-5">
      <div className="row align-items-center">

        {/* Left Half: Description */}
        <div className="col-md-7">
          <h2 className="mb-3" style={{ color: "#6f42c1", fontWeight: "700" }}>
            About Us
          </h2>
          <p style={{ lineHeight: "1.8", textAlign: "justify", fontSize: "1rem" }}>
            माननीय मुख्यमंत्री जी के निर्देश अनुसार प्रदेश के पंजीकृत लग-भग तीन लाख महिला स्वसहायता समूह एवं तेतीस लाख ग्रामीण महिलाओ सदस्यों हेतु “म.प्र आजीविका मार्ट” पोर्टल का निर्माण किया गया हैं | उक्त पोर्टल के माध्यम से पंजीकृत महिला स्वसहायता समूह एवं सदस्य अपने उत्पादों को शासकीय / गैर-शासकीय संस्थाओ एवं व्यक्तिगत उपभोक्ता को विक्रय कर अपनी भागीदारी एवं रोजगार के अवसरों में वृद्धि कर सकेंगी |

            उक्त पोर्टल पर ब्लॉक पर अधिकृत अधिकारी द्वारा पंजीकृत महिला स्वसहायता समूह एवं सदस्यों के उत्पादों को रजिस्टर किया जायेगा |

            उक्त पोर्टल उपयोग कर शासकीय / गैर-शासकीय सस्थाये एवं व्यक्तिगत उपभोक्ता आवश्यता अनुसार पंजीकृत महिला स्वसहायता समूह एवं सदस्य के उत्पादों को क्रय करने हेतु सम्बंधित्त महिला स्वसहायता समूह को संपर्क कर पाएंगे | जिसके पश्चात् सम्बंधित्त महिला स्वसहायता समूह को एस.एम.एस के माध्यम से क्रेता द्वारा चाहे गए उत्पाद की जानकारी प्रदान जाएगी एवं ब्लॉक पर अधिकृत अधिकारी को आर्डर की जानकारी उक्त लॉग इन पर दी जाएगी |
          </p>
        </div>

        {/* Right Half: Image + Name + Designation */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src="/assets/images/mohan-yadav.png"
            alt="Dr Mohan Yadav"
            className="img-fluid rounded-circle shadow-sm"
            style={{ width: "450px", height: "450px", objectFit: "cover" }}
          />
          <div className="mt-3">
            <h5 className="bg-primary text-white py-1 px-3 d-inline-block rounded">
              श्री मोहन यादव
            </h5>
          </div>
          <div className="mt-1">
            <span className="bg-warning text-dark py-1 px-3 d-inline-block rounded">
              माननीय मुख्यमंत्री, मध्यप्रदेश
            </span>
          </div>
        </div>
      </div>
      <MetricFooter />
      <GradientDivider />
    </div>
  );
}
