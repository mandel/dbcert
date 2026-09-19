
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
                                                tappe$1 = recConcat({
                                                      "a#": ({
                                                        "$left": ({
                                                          "$nat": (32.0)
                                                        })
                                                      })
                                                    }, {
                                                      "b#": (recDot(stratify0$0, "_c0.age"))
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
                                                                            tapp$0 = {
                                                                                "$left": (natLt(stratify0$0, stratify1$0))
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
                    {
                      let stratify0$2;
                      {
                        ;
                        stratify0$2 = groupBy("0", array(), flatten(stratify1));;
                        {
                          let stratify2;
                          {
                            ;
                            {
                              let tmp0 = distinct(array());
                              {
                                ;
                                iterColl(stratify0$2, (function (tmap$0) {
                                                                        tmp0 = union(tmp0, array(recDot(tmap$0, "0")));
                                  }));;
                                stratify2 = tmp0;
                              }
                            };
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
                                              "slc": (tmap$0)
                                            });;
                                        {
                                          let stratify0$1;
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
                                                          let stratify0$0;
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
                                                            tmp1 = union(tmp1, array(recDot(stratify0$0, "_c0.age")));
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }));;
                                                stratify0$1 = tmp1;
                                              }
                                            };
                                            {
                                              let stratify1$0;
                                              {
                                                ;
                                                {
                                                  let tmp1 = distinct(array());
                                                  {
                                                    ;
                                                    iterColl(stratify0$1, (function (tsel$0) {
                                                                                                                {
                                                          let stratify0$0;
                                                          {
                                                            ;
                                                            if (either(tsel$0)) {
                                                              {
                                                                let teitherL$0 = getLeft(tsel$0);
                                                                stratify0$0 = true;
                                                              }
                                                            } else {
                                                              {
                                                                let teitherR$0 = getRight(tsel$0);
                                                                stratify0$0 = false;
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
                                                    stratify1$0 = tmp1;
                                                  }
                                                };
                                                {
                                                  let stratify2$0;
                                                  {
                                                    ;
                                                    {
                                                      let tmp1 = distinct(array());
                                                      {
                                                        ;
                                                        iterColl(flatten(stratify1$0), (function (tmap$1) {
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
                                                        stratify2$0 = tmp1;
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
                                                                      let stratify3$0;
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
                                                                                stratify3$0 = teitherL$0;
                                                                              }
                                                                            } else {
                                                                              {
                                                                                let teitherR$0 = getRight(tapp$0);
                                                                                stratify3$0 = {
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
                                                                        tmp1 = union(tmp1, array(recDot(stratify3$0, "_c0.age")));
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }));;
                                                            stratify3 = tmp1;
                                                          }
                                                        };
                                                        tmp0 = union(tmp0, array(recConcat({
                                                                  "_c1": ({
                                                                    "$left": (natDiv(natSum(stratify2$0), count(stratify3)))
                                                                  })
                                                                }, {
                                                                })));
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
        }
      }
    };
    return ret0;
  }
}module.exports = { query };
