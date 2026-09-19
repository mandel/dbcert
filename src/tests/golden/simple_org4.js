
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
                    iterColl(recDot(constants0, "employees"), (function (tmap$0) {
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
                                            "employees.age": ({
                                              "$right": ({
                                                "$nat": (0.0)
                                              })
                                            }), 
                                            "employees.name": ({
                                              "$right": ("")
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
                                                "employees.age": ({
                                                  "$right": ({
                                                    "$nat": (0.0)
                                                  })
                                                }), 
                                                "employees.name": ({
                                                  "$right": ("")
                                                })
                                              };
                                          }
                                        }
                                      }
                                    };
                                    tmp0 = union(tmp0, array(recConcat({
                                              "_c0.name": (recDot(stratify0$0, "employees.name"))
                                            }, recConcat({
                                                "_c0.age": (recDot(stratify1, "employees.age"))
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
                    stratify0$1 = groupBy("0", array("_c0.age"), stratify0);;
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
                                                    "_c0.age": ({
                                                      "$right": ({
                                                        "$nat": (0.0)
                                                      })
                                                    }), 
                                                    "_c0.name": ({
                                                      "$right": ("")
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
                                                                        "_c0.age": ({
                                                                          "$right": ({
                                                                            "$nat": (0.0)
                                                                          })
                                                                        }), 
                                                                        "_c0.name": ({
                                                                          "$right": ("")
                                                                        })
                                                                      };
                                                                  }
                                                                }
                                                              }
                                                            };
                                                            tmp1 = union(tmp1, array(recDot(stratify1$0, "_c0.name")));
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }));;
                                                stratify1$1 = tmp1;
                                              }
                                            };
                                            tmp0 = union(tmp0, array(recConcat({
                                                      "_c0_age": (recDot(stratify0$0, "_c0.age"))
                                                    }, recConcat({
                                                        "_c1": ({
                                                          "$left": (count(stratify1$1))
                                                        })
                                                      }, {
                                                      }))));
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
