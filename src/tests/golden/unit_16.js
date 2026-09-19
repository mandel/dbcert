
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
                        iterColl(stratify0, (function (tsel$0) {
                                                        {
                              let stratify0$4;
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
                                          let tapp$8;
                                          {
                                            ;
                                            {
                                              let tapp$6;
                                              {
                                                ;
                                                {
                                                  let stratify0$3;
                                                  {
                                                    ;
                                                    {
                                                      let tmp1 = distinct(array());
                                                      {
                                                        ;
                                                        iterColl(recDot(constants0, "table0"), (function (tmap$0) {
                                                                                                                        {
                                                              let tappe$1;
                                                              {
                                                                ;
                                                                tappe$1 = recConcat({
                                                                      "tl": (tappe$0)
                                                                    }, {
                                                                      "slc": (array(tmap$0))
                                                                    });;
                                                                {
                                                                  let stratify0$0;
                                                                  {
                                                                    ;
                                                                    {
                                                                      let tapp$1;
                                                                      {
                                                                        ;
                                                                        tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                          let tapp$1;
                                                                          {
                                                                            ;
                                                                            tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                              let tapp$1;
                                                                              {
                                                                                ;
                                                                                tapp$1 = nth(recDot(tappe$1, "slc"), {
                                                                                      "$nat": (0.0)
                                                                                    });;
                                                                                if (either(tapp$1)) {
                                                                                  {
                                                                                    let teitherL$0 = getLeft(tapp$1);
                                                                                    stratify2 = teitherL$0;
                                                                                  }
                                                                                } else {
                                                                                  {
                                                                                    let teitherR$0 = getRight(tapp$1);
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
                                                                                      "t0.a0": (recDot(stratify0$0, "table0.a"))
                                                                                    }, recConcat({
                                                                                        "t0.b0": (recDot(stratify1$0, "table0.b"))
                                                                                      }, recConcat({
                                                                                          "t0.c0": (recDot(stratify2, "table0.c"))
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
                                                        stratify0$3 = tmp1;
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
                                                            iterColl(stratify0$3, (function (tprod$0) {
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
                                                                              let tappe$1;
                                                                              {
                                                                                ;
                                                                                tappe$1 = recConcat({
                                                                                      "tl": (tappe$0)
                                                                                    }, {
                                                                                      "slc": (array(tmap$0))
                                                                                    });;
                                                                                {
                                                                                  let stratify0$0;
                                                                                  {
                                                                                    ;
                                                                                    {
                                                                                      let tapp$1;
                                                                                      {
                                                                                        ;
                                                                                        tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                          let tapp$1;
                                                                                          {
                                                                                            ;
                                                                                            tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                              let tapp$1;
                                                                                              {
                                                                                                ;
                                                                                                tapp$1 = nth(recDot(tappe$1, "slc"), {
                                                                                                      "$nat": (0.0)
                                                                                                    });;
                                                                                                if (either(tapp$1)) {
                                                                                                  {
                                                                                                    let teitherL$0 = getLeft(tapp$1);
                                                                                                    stratify2 = teitherL$0;
                                                                                                  }
                                                                                                } else {
                                                                                                  {
                                                                                                    let teitherR$0 = getRight(tapp$1);
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
                                                                                                      "t1.a1": (recDot(stratify0$0, "table1.a"))
                                                                                                    }, recConcat({
                                                                                                        "t1.b1": (recDot(stratify1$0, "table1.b"))
                                                                                                      }, recConcat({
                                                                                                          "t1.c1": (recDot(stratify2, "table1.c"))
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
                                                                      let tappe$1;
                                                                      {
                                                                        ;
                                                                        tappe$1 = recConcat({
                                                                              "tl": (tappe$0)
                                                                            }, {
                                                                              "slc": (array(tmap$0))
                                                                            });;
                                                                        {
                                                                          let stratify0$2;
                                                                          {
                                                                            ;
                                                                            {
                                                                              let tapp$5;
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
                                                                                        tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                                "t0.a0": ({
                                                                                                  "$right": ({
                                                                                                    "$nat": (0.0)
                                                                                                  })
                                                                                                }), 
                                                                                                "t0.b0": ({
                                                                                                  "$right": ({
                                                                                                    "$nat": (0.0)
                                                                                                  })
                                                                                                }), 
                                                                                                "t0.c0": ({
                                                                                                  "$right": ({
                                                                                                    "$nat": (0.0)
                                                                                                  })
                                                                                                }), 
                                                                                                "t1.a1": ({
                                                                                                  "$right": ({
                                                                                                    "$nat": (0.0)
                                                                                                  })
                                                                                                }), 
                                                                                                "t1.b1": ({
                                                                                                  "$right": ({
                                                                                                    "$nat": (0.0)
                                                                                                  })
                                                                                                }), 
                                                                                                "t1.c1": ({
                                                                                                  "$right": ({
                                                                                                    "$nat": (0.0)
                                                                                                  })
                                                                                                })
                                                                                              };
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    };
                                                                                    tapp$5 = recDot(stratify0$0, "t0.a0");
                                                                                  }
                                                                                };
                                                                                if (either(tapp$5)) {
                                                                                  {
                                                                                    let teitherL$0 = getLeft(tapp$5);
                                                                                    {
                                                                                      let tapp$4;
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
                                                                                                tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                                        "t0.a0": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        }), 
                                                                                                        "t0.b0": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        }), 
                                                                                                        "t0.c0": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        }), 
                                                                                                        "t1.a1": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        }), 
                                                                                                        "t1.b1": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        }), 
                                                                                                        "t1.c1": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        })
                                                                                                      };
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            };
                                                                                            tapp$4 = recDot(stratify0$0, "t1.c1");
                                                                                          }
                                                                                        };
                                                                                        if (either(tapp$4)) {
                                                                                          {
                                                                                            let teitherL$0 = getLeft(tapp$4);
                                                                                            {
                                                                                              let tapp$3;
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
                                                                                                        tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                                                "t0.a0": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                }), 
                                                                                                                "t0.b0": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                }), 
                                                                                                                "t0.c0": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                }), 
                                                                                                                "t1.a1": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                }), 
                                                                                                                "t1.b1": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                }), 
                                                                                                                "t1.c1": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                })
                                                                                                              };
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    };
                                                                                                    tapp$3 = recDot(stratify0$0, "t0.a0");
                                                                                                  }
                                                                                                };
                                                                                                if (either(tapp$3)) {
                                                                                                  {
                                                                                                    let teitherL$0 = getLeft(tapp$3);
                                                                                                    {
                                                                                                      let stratify0$1;
                                                                                                      {
                                                                                                        ;
                                                                                                        {
                                                                                                          let tapp$2;
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
                                                                                                                    tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                                                            "t0.a0": ({
                                                                                                                              "$right": ({
                                                                                                                                "$nat": (0.0)
                                                                                                                              })
                                                                                                                            }), 
                                                                                                                            "t0.b0": ({
                                                                                                                              "$right": ({
                                                                                                                                "$nat": (0.0)
                                                                                                                              })
                                                                                                                            }), 
                                                                                                                            "t0.c0": ({
                                                                                                                              "$right": ({
                                                                                                                                "$nat": (0.0)
                                                                                                                              })
                                                                                                                            }), 
                                                                                                                            "t1.a1": ({
                                                                                                                              "$right": ({
                                                                                                                                "$nat": (0.0)
                                                                                                                              })
                                                                                                                            }), 
                                                                                                                            "t1.b1": ({
                                                                                                                              "$right": ({
                                                                                                                                "$nat": (0.0)
                                                                                                                              })
                                                                                                                            }), 
                                                                                                                            "t1.c1": ({
                                                                                                                              "$right": ({
                                                                                                                                "$nat": (0.0)
                                                                                                                              })
                                                                                                                            })
                                                                                                                          };
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                };
                                                                                                                tapp$2 = recDot(stratify0$0, "t1.c1");
                                                                                                              }
                                                                                                            };
                                                                                                            if (either(tapp$2)) {
                                                                                                              {
                                                                                                                let teitherL$0 = getLeft(tapp$2);
                                                                                                                stratify0$1 = teitherL$0;
                                                                                                              }
                                                                                                            } else {
                                                                                                              {
                                                                                                                let teitherR$0 = getRight(tapp$2);
                                                                                                                stratify0$1 = {
                                                                                                                    "$right": (teitherR$0)
                                                                                                                  };
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        };
                                                                                                        stratify0$2 = {
                                                                                                            "$left": (natPlus(teitherL$0, stratify0$1))
                                                                                                          };
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                } else {
                                                                                                  {
                                                                                                    let teitherR$0 = getRight(tapp$3);
                                                                                                    stratify0$2 = {
                                                                                                        "$right": (teitherR$0)
                                                                                                      };
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        } else {
                                                                                          {
                                                                                            let teitherR$0 = getRight(tapp$4);
                                                                                            stratify0$2 = {
                                                                                                "$right": (teitherR$0)
                                                                                              };
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                } else {
                                                                                  {
                                                                                    let teitherR$0 = getRight(tapp$5);
                                                                                    stratify0$2 = {
                                                                                        "$right": (teitherR$0)
                                                                                      };
                                                                                  }
                                                                                }
                                                                              }
                                                                            };
                                                                            tmp1 = union(tmp1, array(recConcat({
                                                                                      "a0_plus_c1": (stratify0$2)
                                                                                    }, {
                                                                                    })));
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }));;
                                                                stratify2 = tmp1;
                                                              }
                                                            };
                                                            {
                                                              let stratify3;
                                                              {
                                                                ;
                                                                {
                                                                  let tmp1 = distinct(array());
                                                                  {
                                                                    ;
                                                                    iterColl(stratify2, (function (tmap$0) {
                                                                                                                                                {
                                                                          let tappe$1;
                                                                          {
                                                                            ;
                                                                            {
                                                                              let stratify0$2;
                                                                              {
                                                                                ;
                                                                                {
                                                                                  let tapp$5;
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
                                                                                                    })
                                                                                                  };
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        };
                                                                                        tapp$5 = recDot(stratify0$0, "_c0.a");
                                                                                      }
                                                                                    };
                                                                                    if (either(tapp$5)) {
                                                                                      {
                                                                                        let teitherL$0 = getLeft(tapp$5);
                                                                                        {
                                                                                          let tapp$4;
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
                                                                                                            })
                                                                                                          };
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                };
                                                                                                tapp$4 = recDot(stratify0$0, "_c0.b");
                                                                                              }
                                                                                            };
                                                                                            if (either(tapp$4)) {
                                                                                              {
                                                                                                let teitherL$0 = getLeft(tapp$4);
                                                                                                {
                                                                                                  let tapp$3;
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
                                                                                                                    })
                                                                                                                  };
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        };
                                                                                                        tapp$3 = recDot(stratify0$0, "_c0.a");
                                                                                                      }
                                                                                                    };
                                                                                                    if (either(tapp$3)) {
                                                                                                      {
                                                                                                        let teitherL$0 = getLeft(tapp$3);
                                                                                                        {
                                                                                                          let stratify0$1;
                                                                                                          {
                                                                                                            ;
                                                                                                            {
                                                                                                              let tapp$2;
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
                                                                                                                                })
                                                                                                                              };
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    };
                                                                                                                    tapp$2 = recDot(stratify0$0, "_c0.b");
                                                                                                                  }
                                                                                                                };
                                                                                                                if (either(tapp$2)) {
                                                                                                                  {
                                                                                                                    let teitherL$0 = getLeft(tapp$2);
                                                                                                                    stratify0$1 = teitherL$0;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  {
                                                                                                                    let teitherR$0 = getRight(tapp$2);
                                                                                                                    stratify0$1 = {
                                                                                                                        "$right": (teitherR$0)
                                                                                                                      };
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            };
                                                                                                            stratify0$2 = {
                                                                                                                "$left": (natPlus(teitherL$0, stratify0$1))
                                                                                                              };
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    } else {
                                                                                                      {
                                                                                                        let teitherR$0 = getRight(tapp$3);
                                                                                                        stratify0$2 = {
                                                                                                            "$right": (teitherR$0)
                                                                                                          };
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            } else {
                                                                                              {
                                                                                                let teitherR$0 = getRight(tapp$4);
                                                                                                stratify0$2 = {
                                                                                                    "$right": (teitherR$0)
                                                                                                  };
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    } else {
                                                                                      {
                                                                                        let teitherR$0 = getRight(tapp$5);
                                                                                        stratify0$2 = {
                                                                                            "$right": (teitherR$0)
                                                                                          };
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                };
                                                                                tappe$1 = recConcat({
                                                                                      "a#": (stratify0$2)
                                                                                    }, {
                                                                                      "b#": (recDot(tmap$0, "a0_plus_c1"))
                                                                                    });
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
                                                                                                            tmp1 = union(tmp1, array({
                                                                                                                    "$left": (natLe(stratify0$0, stratify1$0))
                                                                                                                  }));
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
                                                                                                tmp1 = union(tmp1, array({
                                                                                                        "$right": (null)
                                                                                                      }));
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
                                                                                    tmp1 = union(tmp1, array({
                                                                                            "$right": (null)
                                                                                          }));
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }));;
                                                                    stratify3 = tmp1;
                                                                  }
                                                                };
                                                                {
                                                                  let stratify4;
                                                                  {
                                                                    ;
                                                                    {
                                                                      let tmp1 = distinct(array());
                                                                      {
                                                                        ;
                                                                        iterColl(stratify3, (function (tsel$1) {
                                                                                                                                                        {
                                                                              let stratify0$0;
                                                                              {
                                                                                ;
                                                                                if (either(tsel$1)) {
                                                                                  {
                                                                                    let teitherL$0 = getLeft(tsel$1);
                                                                                    stratify0$0 = (!teitherL$0);
                                                                                  }
                                                                                } else {
                                                                                  {
                                                                                    let teitherR$0 = getRight(tsel$1);
                                                                                    stratify0$0 = false;
                                                                                  }
                                                                                };
                                                                                if (stratify0$0) {
                                                                                  tmp1 = union(tmp1, array(array(tsel$1)));
                                                                                } else {
                                                                                  tmp1 = union(tmp1, array(array()));
                                                                                }
                                                                              }
                                                                            }
                                                                          }));;
                                                                        stratify4 = tmp1;
                                                                      }
                                                                    };
                                                                    tapp$6 = nth(flatten(stratify4), {
                                                                          "$nat": (0.0)
                                                                        });
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
                                                if (either(tapp$6)) {
                                                  {
                                                    let teitherL$0 = getLeft(tapp$6);
                                                    tapp$8 = teitherL$0;
                                                  }
                                                } else {
                                                  {
                                                    let teitherR$0 = getRight(tapp$6);
                                                    tapp$8 = {
                                                        "$right": (null)
                                                      };
                                                  }
                                                }
                                              }
                                            };
                                            if (either(tapp$8)) {
                                              {
                                                let teitherL$0 = getLeft(tapp$8);
                                                tapp$0 = {
                                                    "$left": (false)
                                                  };
                                              }
                                            } else {
                                              {
                                                let teitherR$0 = getRight(tapp$8);
                                                {
                                                  let tapp$7;
                                                  {
                                                    ;
                                                    {
                                                      let tapp$6;
                                                      {
                                                        ;
                                                        {
                                                          let stratify0$3;
                                                          {
                                                            ;
                                                            {
                                                              let tmp1 = distinct(array());
                                                              {
                                                                ;
                                                                iterColl(recDot(constants0, "table0"), (function (tmap$0) {
                                                                                                                                        {
                                                                      let tappe$1;
                                                                      {
                                                                        ;
                                                                        tappe$1 = recConcat({
                                                                              "tl": (tappe$0)
                                                                            }, {
                                                                              "slc": (array(tmap$0))
                                                                            });;
                                                                        {
                                                                          let stratify0$0;
                                                                          {
                                                                            ;
                                                                            {
                                                                              let tapp$1;
                                                                              {
                                                                                ;
                                                                                tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                  let tapp$1;
                                                                                  {
                                                                                    ;
                                                                                    tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                      let tapp$1;
                                                                                      {
                                                                                        ;
                                                                                        tapp$1 = nth(recDot(tappe$1, "slc"), {
                                                                                              "$nat": (0.0)
                                                                                            });;
                                                                                        if (either(tapp$1)) {
                                                                                          {
                                                                                            let teitherL$0 = getLeft(tapp$1);
                                                                                            stratify2 = teitherL$0;
                                                                                          }
                                                                                        } else {
                                                                                          {
                                                                                            let teitherR$0 = getRight(tapp$1);
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
                                                                                              "t0.a0": (recDot(stratify0$0, "table0.a"))
                                                                                            }, recConcat({
                                                                                                "t0.b0": (recDot(stratify1$0, "table0.b"))
                                                                                              }, recConcat({
                                                                                                  "t0.c0": (recDot(stratify2, "table0.c"))
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
                                                                stratify0$3 = tmp1;
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
                                                                    iterColl(stratify0$3, (function (tprod$0) {
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
                                                                                      let tappe$1;
                                                                                      {
                                                                                        ;
                                                                                        tappe$1 = recConcat({
                                                                                              "tl": (tappe$0)
                                                                                            }, {
                                                                                              "slc": (array(tmap$0))
                                                                                            });;
                                                                                        {
                                                                                          let stratify0$0;
                                                                                          {
                                                                                            ;
                                                                                            {
                                                                                              let tapp$1;
                                                                                              {
                                                                                                ;
                                                                                                tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                                  let tapp$1;
                                                                                                  {
                                                                                                    ;
                                                                                                    tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                                      let tapp$1;
                                                                                                      {
                                                                                                        ;
                                                                                                        tapp$1 = nth(recDot(tappe$1, "slc"), {
                                                                                                              "$nat": (0.0)
                                                                                                            });;
                                                                                                        if (either(tapp$1)) {
                                                                                                          {
                                                                                                            let teitherL$0 = getLeft(tapp$1);
                                                                                                            stratify2 = teitherL$0;
                                                                                                          }
                                                                                                        } else {
                                                                                                          {
                                                                                                            let teitherR$0 = getRight(tapp$1);
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
                                                                                                              "t1.a1": (recDot(stratify0$0, "table1.a"))
                                                                                                            }, recConcat({
                                                                                                                "t1.b1": (recDot(stratify1$0, "table1.b"))
                                                                                                              }, recConcat({
                                                                                                                  "t1.c1": (recDot(stratify2, "table1.c"))
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
                                                                              let tappe$1;
                                                                              {
                                                                                ;
                                                                                tappe$1 = recConcat({
                                                                                      "tl": (tappe$0)
                                                                                    }, {
                                                                                      "slc": (array(tmap$0))
                                                                                    });;
                                                                                {
                                                                                  let stratify0$2;
                                                                                  {
                                                                                    ;
                                                                                    {
                                                                                      let tapp$5;
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
                                                                                                tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                                        "t0.a0": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        }), 
                                                                                                        "t0.b0": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        }), 
                                                                                                        "t0.c0": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        }), 
                                                                                                        "t1.a1": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        }), 
                                                                                                        "t1.b1": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        }), 
                                                                                                        "t1.c1": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        })
                                                                                                      };
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            };
                                                                                            tapp$5 = recDot(stratify0$0, "t0.a0");
                                                                                          }
                                                                                        };
                                                                                        if (either(tapp$5)) {
                                                                                          {
                                                                                            let teitherL$0 = getLeft(tapp$5);
                                                                                            {
                                                                                              let tapp$4;
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
                                                                                                        tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                                                "t0.a0": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                }), 
                                                                                                                "t0.b0": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                }), 
                                                                                                                "t0.c0": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                }), 
                                                                                                                "t1.a1": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                }), 
                                                                                                                "t1.b1": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                }), 
                                                                                                                "t1.c1": ({
                                                                                                                  "$right": ({
                                                                                                                    "$nat": (0.0)
                                                                                                                  })
                                                                                                                })
                                                                                                              };
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    };
                                                                                                    tapp$4 = recDot(stratify0$0, "t1.c1");
                                                                                                  }
                                                                                                };
                                                                                                if (either(tapp$4)) {
                                                                                                  {
                                                                                                    let teitherL$0 = getLeft(tapp$4);
                                                                                                    {
                                                                                                      let tapp$3;
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
                                                                                                                tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                                                        "t0.a0": ({
                                                                                                                          "$right": ({
                                                                                                                            "$nat": (0.0)
                                                                                                                          })
                                                                                                                        }), 
                                                                                                                        "t0.b0": ({
                                                                                                                          "$right": ({
                                                                                                                            "$nat": (0.0)
                                                                                                                          })
                                                                                                                        }), 
                                                                                                                        "t0.c0": ({
                                                                                                                          "$right": ({
                                                                                                                            "$nat": (0.0)
                                                                                                                          })
                                                                                                                        }), 
                                                                                                                        "t1.a1": ({
                                                                                                                          "$right": ({
                                                                                                                            "$nat": (0.0)
                                                                                                                          })
                                                                                                                        }), 
                                                                                                                        "t1.b1": ({
                                                                                                                          "$right": ({
                                                                                                                            "$nat": (0.0)
                                                                                                                          })
                                                                                                                        }), 
                                                                                                                        "t1.c1": ({
                                                                                                                          "$right": ({
                                                                                                                            "$nat": (0.0)
                                                                                                                          })
                                                                                                                        })
                                                                                                                      };
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            };
                                                                                                            tapp$3 = recDot(stratify0$0, "t0.a0");
                                                                                                          }
                                                                                                        };
                                                                                                        if (either(tapp$3)) {
                                                                                                          {
                                                                                                            let teitherL$0 = getLeft(tapp$3);
                                                                                                            {
                                                                                                              let stratify0$1;
                                                                                                              {
                                                                                                                ;
                                                                                                                {
                                                                                                                  let tapp$2;
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
                                                                                                                            tapp$1 = nth(recDot(tappe$1, "slc"), {
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
                                                                                                                                    "t0.a0": ({
                                                                                                                                      "$right": ({
                                                                                                                                        "$nat": (0.0)
                                                                                                                                      })
                                                                                                                                    }), 
                                                                                                                                    "t0.b0": ({
                                                                                                                                      "$right": ({
                                                                                                                                        "$nat": (0.0)
                                                                                                                                      })
                                                                                                                                    }), 
                                                                                                                                    "t0.c0": ({
                                                                                                                                      "$right": ({
                                                                                                                                        "$nat": (0.0)
                                                                                                                                      })
                                                                                                                                    }), 
                                                                                                                                    "t1.a1": ({
                                                                                                                                      "$right": ({
                                                                                                                                        "$nat": (0.0)
                                                                                                                                      })
                                                                                                                                    }), 
                                                                                                                                    "t1.b1": ({
                                                                                                                                      "$right": ({
                                                                                                                                        "$nat": (0.0)
                                                                                                                                      })
                                                                                                                                    }), 
                                                                                                                                    "t1.c1": ({
                                                                                                                                      "$right": ({
                                                                                                                                        "$nat": (0.0)
                                                                                                                                      })
                                                                                                                                    })
                                                                                                                                  };
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        };
                                                                                                                        tapp$2 = recDot(stratify0$0, "t1.c1");
                                                                                                                      }
                                                                                                                    };
                                                                                                                    if (either(tapp$2)) {
                                                                                                                      {
                                                                                                                        let teitherL$0 = getLeft(tapp$2);
                                                                                                                        stratify0$1 = teitherL$0;
                                                                                                                      }
                                                                                                                    } else {
                                                                                                                      {
                                                                                                                        let teitherR$0 = getRight(tapp$2);
                                                                                                                        stratify0$1 = {
                                                                                                                            "$right": (teitherR$0)
                                                                                                                          };
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                };
                                                                                                                stratify0$2 = {
                                                                                                                    "$left": (natPlus(teitherL$0, stratify0$1))
                                                                                                                  };
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        } else {
                                                                                                          {
                                                                                                            let teitherR$0 = getRight(tapp$3);
                                                                                                            stratify0$2 = {
                                                                                                                "$right": (teitherR$0)
                                                                                                              };
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                } else {
                                                                                                  {
                                                                                                    let teitherR$0 = getRight(tapp$4);
                                                                                                    stratify0$2 = {
                                                                                                        "$right": (teitherR$0)
                                                                                                      };
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        } else {
                                                                                          {
                                                                                            let teitherR$0 = getRight(tapp$5);
                                                                                            stratify0$2 = {
                                                                                                "$right": (teitherR$0)
                                                                                              };
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    };
                                                                                    tmp1 = union(tmp1, array(recConcat({
                                                                                              "a0_plus_c1": (stratify0$2)
                                                                                            }, {
                                                                                            })));
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }));;
                                                                        stratify2 = tmp1;
                                                                      }
                                                                    };
                                                                    {
                                                                      let stratify3;
                                                                      {
                                                                        ;
                                                                        {
                                                                          let tmp1 = distinct(array());
                                                                          {
                                                                            ;
                                                                            iterColl(stratify2, (function (tmap$0) {
                                                                                                                                                                {
                                                                                  let tappe$1;
                                                                                  {
                                                                                    ;
                                                                                    {
                                                                                      let stratify0$2;
                                                                                      {
                                                                                        ;
                                                                                        {
                                                                                          let tapp$5;
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
                                                                                                            })
                                                                                                          };
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                };
                                                                                                tapp$5 = recDot(stratify0$0, "_c0.a");
                                                                                              }
                                                                                            };
                                                                                            if (either(tapp$5)) {
                                                                                              {
                                                                                                let teitherL$0 = getLeft(tapp$5);
                                                                                                {
                                                                                                  let tapp$4;
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
                                                                                                                    })
                                                                                                                  };
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        };
                                                                                                        tapp$4 = recDot(stratify0$0, "_c0.b");
                                                                                                      }
                                                                                                    };
                                                                                                    if (either(tapp$4)) {
                                                                                                      {
                                                                                                        let teitherL$0 = getLeft(tapp$4);
                                                                                                        {
                                                                                                          let tapp$3;
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
                                                                                                                            })
                                                                                                                          };
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                };
                                                                                                                tapp$3 = recDot(stratify0$0, "_c0.a");
                                                                                                              }
                                                                                                            };
                                                                                                            if (either(tapp$3)) {
                                                                                                              {
                                                                                                                let teitherL$0 = getLeft(tapp$3);
                                                                                                                {
                                                                                                                  let stratify0$1;
                                                                                                                  {
                                                                                                                    ;
                                                                                                                    {
                                                                                                                      let tapp$2;
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
                                                                                                                                        })
                                                                                                                                      };
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            };
                                                                                                                            tapp$2 = recDot(stratify0$0, "_c0.b");
                                                                                                                          }
                                                                                                                        };
                                                                                                                        if (either(tapp$2)) {
                                                                                                                          {
                                                                                                                            let teitherL$0 = getLeft(tapp$2);
                                                                                                                            stratify0$1 = teitherL$0;
                                                                                                                          }
                                                                                                                        } else {
                                                                                                                          {
                                                                                                                            let teitherR$0 = getRight(tapp$2);
                                                                                                                            stratify0$1 = {
                                                                                                                                "$right": (teitherR$0)
                                                                                                                              };
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    };
                                                                                                                    stratify0$2 = {
                                                                                                                        "$left": (natPlus(teitherL$0, stratify0$1))
                                                                                                                      };
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            } else {
                                                                                                              {
                                                                                                                let teitherR$0 = getRight(tapp$3);
                                                                                                                stratify0$2 = {
                                                                                                                    "$right": (teitherR$0)
                                                                                                                  };
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    } else {
                                                                                                      {
                                                                                                        let teitherR$0 = getRight(tapp$4);
                                                                                                        stratify0$2 = {
                                                                                                            "$right": (teitherR$0)
                                                                                                          };
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            } else {
                                                                                              {
                                                                                                let teitherR$0 = getRight(tapp$5);
                                                                                                stratify0$2 = {
                                                                                                    "$right": (teitherR$0)
                                                                                                  };
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        };
                                                                                        tappe$1 = recConcat({
                                                                                              "a#": (stratify0$2)
                                                                                            }, {
                                                                                              "b#": (recDot(tmap$0, "a0_plus_c1"))
                                                                                            });
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
                                                                                                                    tmp1 = union(tmp1, array({
                                                                                                                            "$left": (natLe(stratify0$0, stratify1$0))
                                                                                                                          }));
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
                                                                                                        tmp1 = union(tmp1, array({
                                                                                                                "$right": (null)
                                                                                                              }));
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
                                                                                            tmp1 = union(tmp1, array({
                                                                                                    "$right": (null)
                                                                                                  }));
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }));;
                                                                            stratify3 = tmp1;
                                                                          }
                                                                        };
                                                                        {
                                                                          let stratify4;
                                                                          {
                                                                            ;
                                                                            {
                                                                              let tmp1 = distinct(array());
                                                                              {
                                                                                ;
                                                                                iterColl(stratify3, (function (tsel$0) {
                                                                                                                                                                        {
                                                                                      let stratify0$0;
                                                                                      {
                                                                                        ;
                                                                                        if (either(tsel$0)) {
                                                                                          {
                                                                                            let teitherL$0 = getLeft(tsel$0);
                                                                                            stratify0$0 = false;
                                                                                          }
                                                                                        } else {
                                                                                          {
                                                                                            let teitherR$0 = getRight(tsel$0);
                                                                                            stratify0$0 = true;
                                                                                          }
                                                                                        };
                                                                                        if (stratify0$0) {
                                                                                          tmp1 = union(tmp1, array(array(tsel$0)));
                                                                                        } else {
                                                                                          tmp1 = union(tmp1, array(array()));
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }));;
                                                                                stratify4 = tmp1;
                                                                              }
                                                                            };
                                                                            tapp$6 = nth(flatten(stratify4), {
                                                                                  "$nat": (0.0)
                                                                                });
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
                                                        if (either(tapp$6)) {
                                                          {
                                                            let teitherL$0 = getLeft(tapp$6);
                                                            tapp$7 = teitherL$0;
                                                          }
                                                        } else {
                                                          {
                                                            let teitherR$0 = getRight(tapp$6);
                                                            tapp$7 = {
                                                                "$left": (false)
                                                              };
                                                          }
                                                        }
                                                      }
                                                    };
                                                    if (either(tapp$7)) {
                                                      {
                                                        let teitherL$0 = getLeft(tapp$7);
                                                        tapp$0 = {
                                                            "$left": (true)
                                                          };
                                                      }
                                                    } else {
                                                      {
                                                        let teitherR$0 = getRight(tapp$7);
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
                                        };
                                        if (either(tapp$0)) {
                                          {
                                            let teitherL$0 = getLeft(tapp$0);
                                            stratify0$4 = teitherL$0;
                                          }
                                        } else {
                                          {
                                            let teitherR$0 = getRight(tapp$0);
                                            stratify0$4 = false;
                                          }
                                        }
                                      }
                                    }
                                  }
                                };
                                if (stratify0$4) {
                                  tmp0 = union(tmp0, array(array(tsel$0)));
                                } else {
                                  tmp0 = union(tmp0, array(array()));
                                }
                              }
                            }
                          }));;
                        stratify1 = tmp0;
                      }
                    };
                    ret0 = flatten(stratify1);
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
