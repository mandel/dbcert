
function query(constants0) {
  {
    let ret0;
    {
      let env;
      {
        ;
        env = {
          };;
        {
          let id;
          {
            ;
            id = null;;
            {
              let stratify0;
              {
                ;
                {
                  let tmp0 = distinct(array());
                  {
                    ;
                    iterColl(recDot(constants0, "table1"), (function (tmap$0) {
                                                {
                          let tappe$0;
                          {
                            ;
                            tappe$0 = recConcat({
                                  "tl": (env)
                                }, {
                                  "slc": (array(tmap$0))
                                });;
                            {
                              let stratify0$0;
                              {
                                ;
                                {
                                  let tapp$0;
                                  {
                                    ;
                                    tapp$0 = nth(recDot(tappe$0, "slc"), {
                                          "$nat": (0.0)
                                        });;
                                    if (either(tapp$0)) {
                                      {
                                        let teitherL$0 = getLeft(tapp$0);
                                        stratify0$0 = teitherL$0;
                                      }
                                    } else {
                                      {
                                        let teitherR$0 = getRight(tapp$0);
                                        stratify0$0 = {
                                            "table1.a": ({
                                              "$right": ({
                                                "$nat": (0.0)
                                              })
                                            }), 
                                            "table1.b": ({
                                              "$right": ({
                                                "$nat": (0.0)
                                              })
                                            }), 
                                            "table1.c": ({
                                              "$right": ({
                                                "$nat": (0.0)
                                              })
                                            })
                                          };
                                      }
                                    }
                                  }
                                };
                                {
                                  let stratify1;
                                  {
                                    ;
                                    {
                                      let tapp$0;
                                      {
                                        ;
                                        tapp$0 = nth(recDot(tappe$0, "slc"), {
                                              "$nat": (0.0)
                                            });;
                                        if (either(tapp$0)) {
                                          {
                                            let teitherL$0 = getLeft(tapp$0);
                                            stratify1 = teitherL$0;
                                          }
                                        } else {
                                          {
                                            let teitherR$0 = getRight(tapp$0);
                                            stratify1 = {
                                                "table1.a": ({
                                                  "$right": ({
                                                    "$nat": (0.0)
                                                  })
                                                }), 
                                                "table1.b": ({
                                                  "$right": ({
                                                    "$nat": (0.0)
                                                  })
                                                }), 
                                                "table1.c": ({
                                                  "$right": ({
                                                    "$nat": (0.0)
                                                  })
                                                })
                                              };
                                          }
                                        }
                                      }
                                    };
                                    {
                                      let stratify2;
                                      {
                                        ;
                                        {
                                          let tapp$0;
                                          {
                                            ;
                                            tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                  "$nat": (0.0)
                                                });;
                                            if (either(tapp$0)) {
                                              {
                                                let teitherL$0 = getLeft(tapp$0);
                                                stratify2 = teitherL$0;
                                              }
                                            } else {
                                              {
                                                let teitherR$0 = getRight(tapp$0);
                                                stratify2 = {
                                                    "table1.a": ({
                                                      "$right": ({
                                                        "$nat": (0.0)
                                                      })
                                                    }), 
                                                    "table1.b": ({
                                                      "$right": ({
                                                        "$nat": (0.0)
                                                      })
                                                    }), 
                                                    "table1.c": ({
                                                      "$right": ({
                                                        "$nat": (0.0)
                                                      })
                                                    })
                                                  };
                                              }
                                            }
                                          }
                                        };
                                        tmp0 = union(tmp0, array(recConcat({
                                                  "_c0.a": (recDot(stratify0$0, "table1.a"))
                                                }, recConcat({
                                                    "_c0.b": (recDot(stratify1, "table1.b"))
                                                  }, recConcat({
                                                      "_c0.c": (recDot(stratify2, "table1.c"))
                                                    }, {
                                                    })))));
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }));;
                    stratify0 = tmp0;
                  }
                };
                {
                  let stratify1;
                  {
                    ;
                    {
                      let tmp0 = distinct(array());
                      {
                        ;
                        iterColl(stratify0, (function (tprod$0) {
                                                        {
                              let stratify0$2;
                              {
                                ;
                                {
                                  let tmp1 = distinct(array());
                                  {
                                    ;
                                    iterColl(recDot(constants0, "table0"), (function (tmap$0) {
                                                                                {
                                          let tappe$0;
                                          {
                                            ;
                                            tappe$0 = recConcat({
                                                  "tl": (env)
                                                }, {
                                                  "slc": (array(tmap$0))
                                                });;
                                            {
                                              let stratify0$0;
                                              {
                                                ;
                                                {
                                                  let tapp$0;
                                                  {
                                                    ;
                                                    tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                          "$nat": (0.0)
                                                        });;
                                                    if (either(tapp$0)) {
                                                      {
                                                        let teitherL$0 = getLeft(tapp$0);
                                                        stratify0$0 = teitherL$0;
                                                      }
                                                    } else {
                                                      {
                                                        let teitherR$0 = getRight(tapp$0);
                                                        stratify0$0 = {
                                                            "table0.a": ({
                                                              "$right": ({
                                                                "$nat": (0.0)
                                                              })
                                                            }), 
                                                            "table0.b": ({
                                                              "$right": ({
                                                                "$nat": (0.0)
                                                              })
                                                            }), 
                                                            "table0.c": ({
                                                              "$right": ({
                                                                "$nat": (0.0)
                                                              })
                                                            })
                                                          };
                                                      }
                                                    }
                                                  }
                                                };
                                                {
                                                  let stratify1$0;
                                                  {
                                                    ;
                                                    {
                                                      let tapp$0;
                                                      {
                                                        ;
                                                        tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                              "$nat": (0.0)
                                                            });;
                                                        if (either(tapp$0)) {
                                                          {
                                                            let teitherL$0 = getLeft(tapp$0);
                                                            stratify1$0 = teitherL$0;
                                                          }
                                                        } else {
                                                          {
                                                            let teitherR$0 = getRight(tapp$0);
                                                            stratify1$0 = {
                                                                "table0.a": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "table0.b": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "table0.c": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                })
                                                              };
                                                          }
                                                        }
                                                      }
                                                    };
                                                    {
                                                      let stratify2;
                                                      {
                                                        ;
                                                        {
                                                          let tapp$0;
                                                          {
                                                            ;
                                                            tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                                  "$nat": (0.0)
                                                                });;
                                                            if (either(tapp$0)) {
                                                              {
                                                                let teitherL$0 = getLeft(tapp$0);
                                                                stratify2 = teitherL$0;
                                                              }
                                                            } else {
                                                              {
                                                                let teitherR$0 = getRight(tapp$0);
                                                                stratify2 = {
                                                                    "table0.a": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "table0.b": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "table0.c": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    })
                                                                  };
                                                              }
                                                            }
                                                          }
                                                        };
                                                        tmp1 = union(tmp1, array(recConcat({
                                                                  "t0.d": (recDot(stratify0$0, "table0.a"))
                                                                }, recConcat({
                                                                    "t0.e": (recDot(stratify1$0, "table0.b"))
                                                                  }, recConcat({
                                                                      "t0.f": (recDot(stratify2, "table0.c"))
                                                                    }, {
                                                                    })))));
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }));;
                                    stratify0$2 = tmp1;
                                  }
                                };
                                {
                                  let stratify1$1;
                                  {
                                    ;
                                    {
                                      let tmp1 = distinct(array());
                                      {
                                        ;
                                        iterColl(stratify0$2, (function (tprod$0) {
                                                                                        {
                                              let stratify0$1;
                                              {
                                                ;
                                                {
                                                  let tmp2 = distinct(array());
                                                  {
                                                    ;
                                                    iterColl(recDot(constants0, "table1"), (function (tmap$0) {
                                                                                                                {
                                                          let tappe$0;
                                                          {
                                                            ;
                                                            tappe$0 = recConcat({
                                                                  "tl": (env)
                                                                }, {
                                                                  "slc": (array(tmap$0))
                                                                });;
                                                            {
                                                              let stratify0$0;
                                                              {
                                                                ;
                                                                {
                                                                  let tapp$0;
                                                                  {
                                                                    ;
                                                                    tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                                          "$nat": (0.0)
                                                                        });;
                                                                    if (either(tapp$0)) {
                                                                      {
                                                                        let teitherL$0 = getLeft(tapp$0);
                                                                        stratify0$0 = teitherL$0;
                                                                      }
                                                                    } else {
                                                                      {
                                                                        let teitherR$0 = getRight(tapp$0);
                                                                        stratify0$0 = {
                                                                            "table1.a": ({
                                                                              "$right": ({
                                                                                "$nat": (0.0)
                                                                              })
                                                                            }), 
                                                                            "table1.b": ({
                                                                              "$right": ({
                                                                                "$nat": (0.0)
                                                                              })
                                                                            }), 
                                                                            "table1.c": ({
                                                                              "$right": ({
                                                                                "$nat": (0.0)
                                                                              })
                                                                            })
                                                                          };
                                                                      }
                                                                    }
                                                                  }
                                                                };
                                                                {
                                                                  let stratify1$0;
                                                                  {
                                                                    ;
                                                                    {
                                                                      let tapp$0;
                                                                      {
                                                                        ;
                                                                        tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                                              "$nat": (0.0)
                                                                            });;
                                                                        if (either(tapp$0)) {
                                                                          {
                                                                            let teitherL$0 = getLeft(tapp$0);
                                                                            stratify1$0 = teitherL$0;
                                                                          }
                                                                        } else {
                                                                          {
                                                                            let teitherR$0 = getRight(tapp$0);
                                                                            stratify1$0 = {
                                                                                "table1.a": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                }), 
                                                                                "table1.b": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                }), 
                                                                                "table1.c": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                })
                                                                              };
                                                                          }
                                                                        }
                                                                      }
                                                                    };
                                                                    {
                                                                      let stratify2;
                                                                      {
                                                                        ;
                                                                        {
                                                                          let tapp$0;
                                                                          {
                                                                            ;
                                                                            tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                                                  "$nat": (0.0)
                                                                                });;
                                                                            if (either(tapp$0)) {
                                                                              {
                                                                                let teitherL$0 = getLeft(tapp$0);
                                                                                stratify2 = teitherL$0;
                                                                              }
                                                                            } else {
                                                                              {
                                                                                let teitherR$0 = getRight(tapp$0);
                                                                                stratify2 = {
                                                                                    "table1.a": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "table1.b": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "table1.c": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    })
                                                                                  };
                                                                              }
                                                                            }
                                                                          }
                                                                        };
                                                                        tmp2 = union(tmp2, array(recConcat({
                                                                                  "_c1.a": (recDot(stratify0$0, "table1.a"))
                                                                                }, recConcat({
                                                                                    "_c1.b": (recDot(stratify1$0, "table1.b"))
                                                                                  }, recConcat({
                                                                                      "_c1.c": (recDot(stratify2, "table1.c"))
                                                                                    }, {
                                                                                    })))));
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }));;
                                                    stratify0$1 = tmp2;
                                                  }
                                                };
                                                {
                                                  let tmp2 = distinct(array());
                                                  {
                                                    ;
                                                    iterColl(stratify0$1, (function (tprod$1) {
                                                                                                                tmp2 = union(tmp2, array(recConcat(tprod$0, tprod$1)));
                                                      }));;
                                                    tmp1 = union(tmp1, array(tmp2));
                                                  }
                                                }
                                              }
                                            }
                                          }));;
                                        stratify1$1 = tmp1;
                                      }
                                    };
                                    {
                                      let stratify2;
                                      {
                                        ;
                                        {
                                          let tmp1 = distinct(array());
                                          {
                                            ;
                                            iterColl(flatten(stratify1$1), (function (tmap$0) {
                                                                                                {
                                                  let tappe$0;
                                                  {
                                                    ;
                                                    tappe$0 = recConcat({
                                                          "tl": (env)
                                                        }, {
                                                          "slc": (array(tmap$0))
                                                        });;
                                                    {
                                                      let stratify0$0;
                                                      {
                                                        ;
                                                        {
                                                          let tapp$0;
                                                          {
                                                            ;
                                                            tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                                  "$nat": (0.0)
                                                                });;
                                                            if (either(tapp$0)) {
                                                              {
                                                                let teitherL$0 = getLeft(tapp$0);
                                                                stratify0$0 = teitherL$0;
                                                              }
                                                            } else {
                                                              {
                                                                let teitherR$0 = getRight(tapp$0);
                                                                stratify0$0 = {
                                                                    "_c1.a": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "_c1.b": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "_c1.c": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "t0.d": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "t0.e": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "t0.f": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    })
                                                                  };
                                                              }
                                                            }
                                                          }
                                                        };
                                                        {
                                                          let stratify1$0;
                                                          {
                                                            ;
                                                            {
                                                              let tapp$0;
                                                              {
                                                                ;
                                                                tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                                      "$nat": (0.0)
                                                                    });;
                                                                if (either(tapp$0)) {
                                                                  {
                                                                    let teitherL$0 = getLeft(tapp$0);
                                                                    stratify1$0 = teitherL$0;
                                                                  }
                                                                } else {
                                                                  {
                                                                    let teitherR$0 = getRight(tapp$0);
                                                                    stratify1$0 = {
                                                                        "_c1.a": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "_c1.b": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "_c1.c": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "t0.d": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "t0.e": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "t0.f": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        })
                                                                      };
                                                                  }
                                                                }
                                                              }
                                                            };
                                                            {
                                                              let stratify2$0;
                                                              {
                                                                ;
                                                                {
                                                                  let tapp$0;
                                                                  {
                                                                    ;
                                                                    tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                                          "$nat": (0.0)
                                                                        });;
                                                                    if (either(tapp$0)) {
                                                                      {
                                                                        let teitherL$0 = getLeft(tapp$0);
                                                                        stratify2$0 = teitherL$0;
                                                                      }
                                                                    } else {
                                                                      {
                                                                        let teitherR$0 = getRight(tapp$0);
                                                                        stratify2$0 = {
                                                                            "_c1.a": ({
                                                                              "$right": ({
                                                                                "$nat": (0.0)
                                                                              })
                                                                            }), 
                                                                            "_c1.b": ({
                                                                              "$right": ({
                                                                                "$nat": (0.0)
                                                                              })
                                                                            }), 
                                                                            "_c1.c": ({
                                                                              "$right": ({
                                                                                "$nat": (0.0)
                                                                              })
                                                                            }), 
                                                                            "t0.d": ({
                                                                              "$right": ({
                                                                                "$nat": (0.0)
                                                                              })
                                                                            }), 
                                                                            "t0.e": ({
                                                                              "$right": ({
                                                                                "$nat": (0.0)
                                                                              })
                                                                            }), 
                                                                            "t0.f": ({
                                                                              "$right": ({
                                                                                "$nat": (0.0)
                                                                              })
                                                                            })
                                                                          };
                                                                      }
                                                                    }
                                                                  }
                                                                };
                                                                {
                                                                  let stratify3;
                                                                  {
                                                                    ;
                                                                    {
                                                                      let tapp$0;
                                                                      {
                                                                        ;
                                                                        tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                                              "$nat": (0.0)
                                                                            });;
                                                                        if (either(tapp$0)) {
                                                                          {
                                                                            let teitherL$0 = getLeft(tapp$0);
                                                                            stratify3 = teitherL$0;
                                                                          }
                                                                        } else {
                                                                          {
                                                                            let teitherR$0 = getRight(tapp$0);
                                                                            stratify3 = {
                                                                                "_c1.a": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                }), 
                                                                                "_c1.b": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                }), 
                                                                                "_c1.c": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                }), 
                                                                                "t0.d": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                }), 
                                                                                "t0.e": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                }), 
                                                                                "t0.f": ({
                                                                                  "$right": ({
                                                                                    "$nat": (0.0)
                                                                                  })
                                                                                })
                                                                              };
                                                                          }
                                                                        }
                                                                      }
                                                                    };
                                                                    {
                                                                      let stratify4;
                                                                      {
                                                                        ;
                                                                        {
                                                                          let tapp$0;
                                                                          {
                                                                            ;
                                                                            tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                                                  "$nat": (0.0)
                                                                                });;
                                                                            if (either(tapp$0)) {
                                                                              {
                                                                                let teitherL$0 = getLeft(tapp$0);
                                                                                stratify4 = teitherL$0;
                                                                              }
                                                                            } else {
                                                                              {
                                                                                let teitherR$0 = getRight(tapp$0);
                                                                                stratify4 = {
                                                                                    "_c1.a": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "_c1.b": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "_c1.c": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "t0.d": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "t0.e": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    }), 
                                                                                    "t0.f": ({
                                                                                      "$right": ({
                                                                                        "$nat": (0.0)
                                                                                      })
                                                                                    })
                                                                                  };
                                                                              }
                                                                            }
                                                                          }
                                                                        };
                                                                        {
                                                                          let stratify5;
                                                                          {
                                                                            ;
                                                                            {
                                                                              let tapp$0;
                                                                              {
                                                                                ;
                                                                                tapp$0 = nth(recDot(tappe$0, "slc"), {
                                                                                      "$nat": (0.0)
                                                                                    });;
                                                                                if (either(tapp$0)) {
                                                                                  {
                                                                                    let teitherL$0 = getLeft(tapp$0);
                                                                                    stratify5 = teitherL$0;
                                                                                  }
                                                                                } else {
                                                                                  {
                                                                                    let teitherR$0 = getRight(tapp$0);
                                                                                    stratify5 = {
                                                                                        "_c1.a": ({
                                                                                          "$right": ({
                                                                                            "$nat": (0.0)
                                                                                          })
                                                                                        }), 
                                                                                        "_c1.b": ({
                                                                                          "$right": ({
                                                                                            "$nat": (0.0)
                                                                                          })
                                                                                        }), 
                                                                                        "_c1.c": ({
                                                                                          "$right": ({
                                                                                            "$nat": (0.0)
                                                                                          })
                                                                                        }), 
                                                                                        "t0.d": ({
                                                                                          "$right": ({
                                                                                            "$nat": (0.0)
                                                                                          })
                                                                                        }), 
                                                                                        "t0.e": ({
                                                                                          "$right": ({
                                                                                            "$nat": (0.0)
                                                                                          })
                                                                                        }), 
                                                                                        "t0.f": ({
                                                                                          "$right": ({
                                                                                            "$nat": (0.0)
                                                                                          })
                                                                                        })
                                                                                      };
                                                                                  }
                                                                                }
                                                                              }
                                                                            };
                                                                            tmp1 = union(tmp1, array(recConcat({
                                                                                      "t2.a": (recDot(stratify0$0, "_c1.a"))
                                                                                    }, recConcat({
                                                                                        "t2.b": (recDot(stratify1$0, "_c1.b"))
                                                                                      }, recConcat({
                                                                                          "t2.c": (recDot(stratify2$0, "_c1.c"))
                                                                                        }, recConcat({
                                                                                            "t2.d": (recDot(stratify3, "t0.d"))
                                                                                          }, recConcat({
                                                                                              "t2.e": (recDot(stratify4, "t0.e"))
                                                                                            }, recConcat({
                                                                                                "t2.f": (recDot(stratify5, "t0.f"))
                                                                                              }, {
                                                                                              }))))))));
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }));;
                                            stratify2 = tmp1;
                                          }
                                        };
                                        {
                                          let tmp1 = distinct(array());
                                          {
                                            ;
                                            iterColl(stratify2, (function (tprod$1) {
                                                                                                tmp1 = union(tmp1, array(recConcat(tprod$0, tprod$1)));
                                              }));;
                                            tmp0 = union(tmp0, array(tmp1));
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }));;
                        stratify1 = tmp0;
                      }
                    };
                    {
                      let stratify2;
                      {
                        ;
                        {
                          let tmp0 = distinct(array());
                          {
                            ;
                            iterColl(flatten(stratify1), (function (tsel$0) {
                                                                {
                                  let stratify0$1;
                                  {
                                    ;
                                    {
                                      let tappe$0;
                                      {
                                        ;
                                        tappe$0 = recConcat({
                                              "tl": (env)
                                            }, {
                                              "slc": (array(tsel$0))
                                            });;
                                        {
                                          let tapp$0;
                                          {
                                            ;
                                            {
                                              let tappe$1;
                                              {
                                                ;
                                                {
                                                  let stratify0$0;
                                                  {
                                                    ;
                                                    {
                                                      let tapp$1;
                                                      {
                                                        ;
                                                        tapp$1 = nth(recDot(tappe$0, "slc"), {
                                                              "$nat": (0.0)
                                                            });;
                                                        if (either(tapp$1)) {
                                                          {
                                                            let teitherL$0 = getLeft(tapp$1);
                                                            stratify0$0 = teitherL$0;
                                                          }
                                                        } else {
                                                          {
                                                            let teitherR$0 = getRight(tapp$1);
                                                            stratify0$0 = {
                                                                "_c0.a": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "_c0.b": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "_c0.c": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "t2.a": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "t2.b": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "t2.c": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "t2.d": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "t2.e": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                }), 
                                                                "t2.f": ({
                                                                  "$right": ({
                                                                    "$nat": (0.0)
                                                                  })
                                                                })
                                                              };
                                                          }
                                                        }
                                                      }
                                                    };
                                                    {
                                                      let stratify1$0;
                                                      {
                                                        ;
                                                        {
                                                          let tapp$1;
                                                          {
                                                            ;
                                                            tapp$1 = nth(recDot(tappe$0, "slc"), {
                                                                  "$nat": (0.0)
                                                                });;
                                                            if (either(tapp$1)) {
                                                              {
                                                                let teitherL$0 = getLeft(tapp$1);
                                                                stratify1$0 = teitherL$0;
                                                              }
                                                            } else {
                                                              {
                                                                let teitherR$0 = getRight(tapp$1);
                                                                stratify1$0 = {
                                                                    "_c0.a": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "_c0.b": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "_c0.c": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "t2.a": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "t2.b": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "t2.c": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "t2.d": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "t2.e": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    }), 
                                                                    "t2.f": ({
                                                                      "$right": ({
                                                                        "$nat": (0.0)
                                                                      })
                                                                    })
                                                                  };
                                                              }
                                                            }
                                                          }
                                                        };
                                                        tappe$1 = recConcat({
                                                              "a#": (recDot(stratify0$0, "_c0.a"))
                                                            }, {
                                                              "b#": (recDot(stratify1$0, "t2.b"))
                                                            });
                                                      }
                                                    }
                                                  }
                                                };
                                                {
                                                  let tapp$5;
                                                  {
                                                    ;
                                                    tapp$5 = recDot(tappe$1, "a#");;
                                                    if (either(tapp$5)) {
                                                      {
                                                        let teitherL$0 = getLeft(tapp$5);
                                                        {
                                                          let tapp$4;
                                                          {
                                                            ;
                                                            tapp$4 = {
                                                                "$left": (teitherL$0)
                                                              };;
                                                            {
                                                              let tapp$1;
                                                              {
                                                                ;
                                                                tapp$1 = recDot(tappe$1, "b#");;
                                                                if (either(tapp$1)) {
                                                                  {
                                                                    let teitherL$0 = getLeft(tapp$1);
                                                                    {
                                                                      let tapp$3;
                                                                      {
                                                                        ;
                                                                        tapp$3 = {
                                                                            "$left": (teitherL$0)
                                                                          };;
                                                                        {
                                                                          let stratify0$0;
                                                                          {
                                                                            ;
                                                                            {
                                                                              let tapp$2;
                                                                              {
                                                                                ;
                                                                                tapp$2 = recDot(tappe$1, "a#");;
                                                                                if (either(tapp$2)) {
                                                                                  {
                                                                                    let teitherL$0 = getLeft(tapp$2);
                                                                                    stratify0$0 = teitherL$0;
                                                                                  }
                                                                                } else {
                                                                                  {
                                                                                    let teitherR$0 = getRight(tapp$2);
                                                                                    stratify0$0 = teitherR$0;
                                                                                  }
                                                                                }
                                                                              }
                                                                            };
                                                                            {
                                                                              let stratify1$0;
                                                                              {
                                                                                ;
                                                                                {
                                                                                  let tapp$2;
                                                                                  {
                                                                                    ;
                                                                                    tapp$2 = recDot(tappe$1, "b#");;
                                                                                    if (either(tapp$2)) {
                                                                                      {
                                                                                        let teitherL$0 = getLeft(tapp$2);
                                                                                        stratify1$0 = teitherL$0;
                                                                                      }
                                                                                    } else {
                                                                                      {
                                                                                        let teitherR$0 = getRight(tapp$2);
                                                                                        stratify1$0 = teitherR$0;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                };
                                                                                tapp$0 = {
                                                                                    "$left": (equal(stratify0$0, stratify1$0))
                                                                                  };
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                } else {
                                                                  {
                                                                    let teitherR$0 = getRight(tapp$1);
                                                                    tapp$0 = {
                                                                        "$right": (null)
                                                                      };
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    } else {
                                                      {
                                                        let teitherR$0 = getRight(tapp$5);
                                                        tapp$0 = {
                                                            "$right": (null)
                                                          };
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            };
                                            if (either(tapp$0)) {
                                              {
                                                let teitherL$0 = getLeft(tapp$0);
                                                stratify0$1 = teitherL$0;
                                              }
                                            } else {
                                              {
                                                let teitherR$0 = getRight(tapp$0);
                                                stratify0$1 = false;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    };
                                    if (stratify0$1) {
                                      tmp0 = union(tmp0, array(array(tsel$0)));
                                    } else {
                                      tmp0 = union(tmp0, array(array()));
                                    }
                                  }
                                }
                              }));;
                            stratify2 = tmp0;
                          }
                        };
                        ret0 = flatten(stratify2);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    return ret0;
  }
}module.exports = { query };
