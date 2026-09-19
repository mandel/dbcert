
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
                    iterColl(recDot(constants0, "t1"), (function (tmap$0) {
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
                                            "t1.a1": ({
                                              "$right": ({
                                                "$nat": (0.0)
                                              })
                                            }), 
                                            "t1.b1": ({
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
                                                "t1.a1": ({
                                                  "$right": ({
                                                    "$nat": (0.0)
                                                  })
                                                }), 
                                                "t1.b1": ({
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
                                              "_c0.a1": (recDot(stratify0$0, "t1.a1"))
                                            }, recConcat({
                                                "_c0.b1": (recDot(stratify1, "t1.b1"))
                                              }, {
                                              }))));
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
                  let stratify0$1;
                  {
                    ;
                    stratify0$1 = groupBy("0", array("_c0.a1"), stratify0);;
                    {
                      let stratify1;
                      {
                        ;
                        {
                          let tmp0 = distinct(array());
                          {
                            ;
                            iterColl(stratify0$1, (function (tmap$0) {
                                                                tmp0 = union(tmp0, array(recDot(tmap$0, "0")));
                              }));;
                            stratify1 = tmp0;
                          }
                        };
                        {
                          let tmp0 = distinct(array());
                          {
                            ;
                            iterColl(stratify1, (function (tmap$0) {
                                                                {
                                  let tappe$0;
                                  {
                                    ;
                                    tappe$0 = recConcat({
                                          "tl": (env)
                                        }, {
                                          "slc": (tmap$0)
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
                                                    "_c0.a1": ({
                                                      "$right": ({
                                                        "$nat": (0.0)
                                                      })
                                                    }), 
                                                    "_c0.b1": ({
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
                                          let stratify1$1;
                                          {
                                            ;
                                            {
                                              let tmp1 = distinct(array());
                                              {
                                                ;
                                                iterColl(recDot(tappe$0, "slc"), (function (tmap$1) {
                                                                                                        {
                                                      let tappe$1;
                                                      {
                                                        ;
                                                        tappe$1 = recConcat({
                                                              "tl": (recDot(tappe$0, "tl"))
                                                            }, {
                                                              "slc": (array(tmap$1))
                                                            });;
                                                        {
                                                          let stratify1$0;
                                                          {
                                                            ;
                                                            {
                                                              let tapp$0;
                                                              {
                                                                ;
                                                                tapp$0 = nth(recDot(tappe$1, "slc"), {
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
                                                                        "_c0.a1": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "_c0.b1": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        })
                                                                      };
                                                                  }
                                                                }
                                                              }
                                                            };
                                                            tmp1 = union(tmp1, array(recDot(stratify1$0, "_c0.b1")));
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
                                                    iterColl(stratify1$1, (function (tsel$0) {
                                                                                                                {
                                                          let stratify1$0;
                                                          {
                                                            ;
                                                            if (either(tsel$0)) {
                                                              {
                                                                let teitherL$0 = getLeft(tsel$0);
                                                                stratify1$0 = true;
                                                              }
                                                            } else {
                                                              {
                                                                let teitherR$0 = getRight(tsel$0);
                                                                stratify1$0 = false;
                                                              }
                                                            };
                                                            if (stratify1$0) {
                                                              tmp1 = union(tmp1, array(array(tsel$0)));
                                                            } else {
                                                              tmp1 = union(tmp1, array(array()));
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
                                                        iterColl(flatten(stratify2), (function (tmap$1) {
                                                                                                                        if (either(tmap$1)) {
                                                              {
                                                                let teitherL$0 = getLeft(tmap$1);
                                                                tmp1 = union(tmp1, array(teitherL$0));
                                                              }
                                                            } else {
                                                              {
                                                                let teitherR$0 = getRight(tmap$1);
                                                                tmp1 = union(tmp1, array(teitherR$0));
                                                              }
                                                            }
                                                          }));;
                                                        stratify3 = tmp1;
                                                      }
                                                    };
                                                    tmp0 = union(tmp0, array(recConcat({
                                                              "_c0_a1": (recDot(stratify0$0, "_c0.a1"))
                                                            }, recConcat({
                                                                "_c1": ({
                                                                  "$left": (natMax(stratify3))
                                                                })
                                                              }, {
                                                              }))));
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
                            ret0 = tmp0;
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
