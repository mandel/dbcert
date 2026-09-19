
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
                                                                })
                                                              };
                                                          }
                                                        }
                                                      }
                                                    };
                                                    tappe$1 = recConcat({
                                                          "a#": (recDot(stratify0$0, "_c0.a"))
                                                        }, {
                                                          "b#": (recDot(stratify1$0, "_c0.b"))
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
