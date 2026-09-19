
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
                          let stratify0;
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
                                    stratify0 = teitherL$0;
                                  }
                                } else {
                                  {
                                    let teitherR$0 = getRight(tapp$0);
                                    stratify0 = {
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
                                              "_c0.a": (recDot(stratify0, "table1.a"))
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
                ret0 = tmp0;
              }
            }
          }
        }
      }
    };
    return ret0;
  }
}module.exports = { query };
