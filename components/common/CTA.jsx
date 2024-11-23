"use client" ;

import { useRef } from "react";

export default function CTA({ isMobile }) {
  var url = "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?6498";
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = url;
  var options = {
      enabled: true,
      chatButtonSetting: {
          backgroundColor: "#00e785",
          ctaText: "Chat with us",
          borderRadius: "25",
          marginLeft: "0",
          marginRight: "20",
          marginBottom: "20",
          ctaIconWATI: false,
          position: "right",
      },
      brandSetting: {
          brandName: "Wleness",
          brandSubTitle: "undefined",
          brandImg:
              "https://www.wleness.com/_next/static/media/favicon.c9060b17.svg",
          welcomeText: "Hi there!\nHow can I help you?",
          messageText: "",
          backgroundColor: "#00e785",
          ctaText: "Chat with us",
          borderRadius: "25",
          autoShow: false,
          phoneNumber: "919147047488",
      },
  };
  s.onload = function () {
      CreateWhatsappChatWidget(options);
  };
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);

  return (
    <div> </div>
  );
}