// $("#toDoScreen, #roadMapScreen, #resourcesScreen, #menu, #accountScreen").hide();

// $("#start").fadeOut(1500, function(){
//   $("#toDoScreen").fadeIn(100);
// });

// $(".hamMenu").click(function(){
//   $("#toDoScreen").fadeOut(500,function(){
//     $("#menu").fadeIn(500,function(){
//       $("#roadMapScreen, #resourcesScreen, #accountScreen").hide();
//     });
//   });
// });


// $("#back").click(function(){
//   $("#menu").fadeOut(500,function(){
//     $("#toDoScreen").fadeIn(500,function(){
//       $("#roadMapScreen, #resourcesScreen, #menu, #accountScreen").hide();
//     }); 
//   });
// });


$("#machismoMessage, #misoginiaMessage, #mataMessage, #mujeresMessage, #back,#powerQuote,#domesticQuote,#protestsQuote,#familyQuote,#femicideVideo,#videoExit, #bottomQuoteEn1, #bottomQuoteEn2,#bottomQuoteEn3,#bottomQuoteEn4,#bottomQuoteEn5,#bottomQuoteEn6,#bottomQuoteEn7,#bottomQuoteEn8,#bottomQuoteEn9").hide();

$("#machismoDiv").click(function(){
  $("#machismoDiv,#misoginiaDiv, #mataDiv, #mujeresDiv").fadeOut(200,function(){
    $("#back,#machismoMessage").fadeIn(200)
  });
});

$("#back").click(function(){
  $("#back, #machismoMessage, #misoginiaMessage, #mataMessage, #mujeresMessage").fadeOut(0,function(){
    $("#machismoDiv,#misoginiaDiv, #mataDiv, #mujeresDiv").fadeIn(200);
  });
});

$("#misoginiaDiv").click(function(){
  $("#machismoDiv,#misoginiaDiv, #mataDiv, #mujeresDiv").fadeOut(200,function(){
    $("#back,#misoginiaMessage").fadeIn(200,function(){
    });
  });
});

$("#mataDiv").click(function(){
  $("#machismoDiv,#misoginiaDiv, #mataDiv, #mujeresDiv").fadeOut(200,function(){
    $("#back,#mataMessage").fadeIn(200,function(){
    });
  });
});

$("#mujeresDiv").click(function(){
  $("#machismoDiv,#misoginiaDiv, #mataDiv, #mujeresDiv").fadeOut(200,function(){
    $("#back,#mujeresMessage").fadeIn(200,function(){
    });
  });
});

$("#power").click(function(){
  $("#power").fadeOut(200,function(){
    $("#powerQuote").fadeIn(200,function(){
    });
  });
});

$("#powerQuote").click(function(){
  $("#powerQuote").fadeOut(200,function(){
    $("#power").fadeIn(200,function(){
    });
  });
});


$("#protests").click(function(){
  $("#protests").fadeOut(200,function(){
    $("#protestsQuote").fadeIn(200,function(){
    });
  });
});

$("#protestsQuote").click(function(){
  $("#protestsQuote").fadeOut(200,function(){
    $("#protests").fadeIn(200,function(){
    });
  });
});








$("#domesticViolence").click(function(){
  $("#domesticViolence").fadeOut(200,function(){
    $("#domesticQuote").fadeIn(200,function(){
    });
  });
});


$("#domesticQuote").click(function(){
  $("#domesticQuote").fadeOut(200,function(){
    $("#domesticViolence").fadeIn(200,function(){
    });
  });
});












$("#family").click(function(){
  $("#family").fadeOut(200,function(){
    $("#familyQuote").fadeIn(200,function(){
    });
  });
});


$("#familyQuote").click(function(){
  $("#familyQuote").fadeOut(200,function(){
    $("#family").fadeIn(200,function(){
    });
  });
});













$("#bottomQuote1").click(function(){
  $("#bottomQuote1").fadeOut(200,function(){
    $("#bottomQuoteEn1").fadeIn(200,function(){
    });
  });
});

$("#bottomQuote2").click(function(){
  $("#bottomQuote2").fadeOut(200,function(){
    $("#bottomQuoteEn2").fadeIn(200,function(){
    });
  });
});

$("#bottomQuote3").click(function(){
  $("#bottomQuote3").fadeOut(200,function(){
    $("#bottomQuoteEn3").fadeIn(200,function(){
    });
  });
});


$("#bottomQuote4").click(function(){
  $("#bottomQuote4").fadeOut(200,function(){
    $("#bottomQuoteEn4").fadeIn(200,function(){
    });
  });
});

$("#bottomQuote5").click(function(){
  $("#bottomQuote5").fadeOut(200,function(){
    $("#bottomQuoteEn5").fadeIn(200,function(){
    });
  });
});

$("#bottomQuote6").click(function(){
  $("#bottomQuote6").fadeOut(200,function(){
    $("#bottomQuoteEn6").fadeIn(200,function(){
    });
  });
});

$("#bottomQuote7").click(function(){
  $("#bottomQuote7").fadeOut(200,function(){
    $("#bottomQuoteEn7").fadeIn(200,function(){
    });
  });
});

$("#bottomQuote8").click(function(){
  $("#bottomQuote8").fadeOut(200,function(){
    $("#bottomQuoteEn8").fadeIn(200,function(){
    });
  });
});

$("#bottomQuote9").click(function(){
  $("#bottomQuote9").fadeOut(200,function(){
    $("#bottomQuoteEn9").fadeIn(200,function(){
    });
  });
});



$("#bottomQuoteEn1").click(function(){
  $("#bottomQuoteEn1").fadeOut(200,function(){
    $("#bottomQuote1").fadeIn(200,function(){
    });
  });
});

$("#bottomQuoteEn2").click(function(){
  $("#bottomQuoteEn2").fadeOut(200,function(){
    $("#bottomQuote2").fadeIn(200,function(){
    });
  });
});

$("#bottomQuoteEn3").click(function(){
  $("#bottomQuoteEn3").fadeOut(200,function(){
    $("#bottomQuote3").fadeIn(200,function(){
    });
  });
});


$("#bottomQuoteEn4").click(function(){
  $("#bottomQuoteEn4").fadeOut(200,function(){
    $("#bottomQuote4").fadeIn(200,function(){
    });
  });
});

$("#bottomQuoteEn5").click(function(){
  $("#bottomQuoteEn5").fadeOut(200,function(){
    $("#bottomQuote5").fadeIn(200,function(){
    });
  });
});

$("#bottomQuoteEn6").click(function(){
  $("#bottomQuoteEn6").fadeOut(200,function(){
    $("#bottomQuote6").fadeIn(200,function(){
    });
  });
});

$("#bottomQuoteEn7").click(function(){
  $("#bottomQuoteEn7").fadeOut(200,function(){
    $("#bottomQuote7").fadeIn(200,function(){
    });
  });
});

$("#bottomQuoteEn8").click(function(){
  $("#bottomQuoteEn8").fadeOut(200,function(){
    $("#bottomQuote8").fadeIn(200,function(){
    });
  });
});

$("#bottomQuoteEn9").click(function(){
  $("#bottomQuoteEn9").fadeOut(200,function(){
    $("#bottomQuote9").fadeIn(200,function(){
    });
  });
});









$("#mainPhoto").click(function(){
  $("#mainPhoto, .bottomDiv").fadeOut(200,function(){
    $("#femicideVideo,#videoExit").fadeIn(200,function(){
    });
  });
});



$("#videoExit").click(function(){
  $("#femicideVideo, #videoExit").fadeOut(200,function(){
    $(".bottomDiv,#mainPhoto").fadeIn(200,function(){
    });
  });
});
