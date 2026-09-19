
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
                  let tmp0 = distinct(array());
                  {
                    ;
                    iterColl(stratify0, (function (tmap$0) {
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
                              let stratify0$2;
                              {
                                ;
                                {
                                  let tapp$0;
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
                                        tapp$0 = recDot(stratify0$0, "_c0.a");
                                      }
                                    };
                                    if (either(tapp$0)) {
                                      {
                                        let teitherL$0 = getLeft(tapp$0);
                                        {
                                          let tapp$4;
                                          {
                                            ;
                                            tapp$4 = {
                                                "$left": ({
                                                  "$nat": (0.0)
                                                })
                                              };;
                                            if (either(tapp$4)) {
                                              {
                                                let teitherL$0 = getLeft(tapp$4);
                                                {
                                                  let tapp$3;
                                                  {
                                                    ;
                                                    tapp$3 = {
                                                        "$left": ({
                                                          "$nat": (0.0)
                                                        })
                                                      };;
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
                                                                    tapp$2 = recDot(stratify0$0, "_c0.a");
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
                                                                "$left": (natMinus(teitherL$0, stratify0$1))
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
                                        let teitherR$0 = getRight(tapp$0);
                                        stratify0$2 = {
                                            "$right": (teitherR$0)
                                          };
                                      }
                                    }
                                  }
                                };
                                tmp0 = union(tmp0, array(recConcat({
                                          "_c1": (stratify0$2)
                                        }, {
                                        })));
                              }
                            }
                          }
                        }
                      }));;
                    ret0 = tmp0;
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
