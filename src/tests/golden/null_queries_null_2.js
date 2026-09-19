
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
                    iterColl(recDot(constants0, "R"), (function (tmap$0) {
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
                                            "R.A": ({
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
                                          "_c0.A": (recDot(stratify0$0, "R.A"))
                                        }, {
                                        })));
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
                                                "_c0.A": ({
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
                                              "_c0_A": (recDot(stratify0$0, "_c0.A"))
                                            }, {
                                            })));
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
                            iterColl(recDot(constants0, "S"), (function (tmap$0) {
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
                                                    "S.A": ({
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
                                                  "_c1.A": (recDot(stratify2$0, "S.A"))
                                                }, {
                                                })));
                                      }
                                    }
                                  }
                                }
                              }));;
                            stratify2 = tmp0;
                          }
                        };
                        {
                          let stratify3;
                          {
                            ;
                            {
                              let tmp0 = distinct(array());
                              {
                                ;
                                iterColl(stratify2, (function (tmap$0) {
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
                                                        "_c1.A": ({
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
                                                      "_c1_A": (recDot(stratify2$0, "_c1.A"))
                                                    }, {
                                                    })));
                                          }
                                        }
                                      }
                                    }
                                  }));;
                                stratify3 = tmp0;
                              }
                            };
                            {
                              let stratify4;
                              {
                                ;
                                {
                                  let tmp0 = distinct(array());
                                  {
                                    ;
                                    iterColl(stratify3, (function (tmap$0) {
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
                                                            "_c1_A": ({
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
                                                          "_c2._c1_A": (recDot(stratify2$0, "_c1_A"))
                                                        }, {
                                                        })));
                                              }
                                            }
                                          }
                                        }
                                      }));;
                                    stratify4 = tmp0;
                                  }
                                };
                                {
                                  let stratify5;
                                  {
                                    ;
                                    {
                                      let tmp0 = distinct(array());
                                      {
                                        ;
                                        iterColl(stratify4, (function (tmap$0) {
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
                                                                "_c2._c1_A": ({
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
                                                              "_c0_A": (recDot(stratify2$0, "_c2._c1_A"))
                                                            }, {
                                                            })));
                                                  }
                                                }
                                              }
                                            }
                                          }));;
                                        stratify5 = tmp0;
                                      }
                                    };
                                    ret0 = minus(stratify1, stratify5);
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
      }
    };
    return ret0;
  }
}module.exports = { query };
