
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
                                        tmp0 = union(tmp0, array(recConcat({
                                                  "_c0.a": (recDot(stratify0$0, "table0.a"))
                                                }, recConcat({
                                                    "_c0.b": (recDot(stratify1, "table0.b"))
                                                  }, recConcat({
                                                      "_c0.c": (recDot(stratify2, "table0.c"))
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
                  let stratify0$5;
                  {
                    ;
                    stratify0$5 = groupBy("0", array("_c0.a", "_c0.c"), stratify0);;
                    {
                      let stratify1;
                      {
                        ;
                        {
                          let tmp0 = distinct(array());
                          {
                            ;
                            iterColl(stratify0$5, (function (tmap$0) {
                                                                tmp0 = union(tmp0, array(recDot(tmap$0, "0")));
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
                                iterColl(stratify1, (function (tsel$0) {
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
                                                  "slc": (tsel$0)
                                                });;
                                            {
                                              let tapp$0;
                                              {
                                                ;
                                                {
                                                  let tapp$6;
                                                  {
                                                    ;
                                                    {
                                                      let stratify0$1;
                                                      {
                                                        ;
                                                        {
                                                          let tmp1 = distinct(array());
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
                                                                              let stratify2$0;
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
                                                                                        stratify2$0 = teitherL$0;
                                                                                      }
                                                                                    } else {
                                                                                      {
                                                                                        let teitherR$0 = getRight(tapp$1);
                                                                                        stratify2$0 = {
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
                                                                                tmp1 = union(tmp1, array(recConcat({
                                                                                          "_c1.a": (recDot(stratify0$0, "table1.a"))
                                                                                        }, recConcat({
                                                                                            "_c1.b": (recDot(stratify1$0, "table1.b"))
                                                                                          }, recConcat({
                                                                                              "_c1.c": (recDot(stratify2$0, "table1.c"))
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
                                                                iterColl(stratify0$1, (function (tmap$0) {
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
                                                                                        })
                                                                                      };
                                                                                  }
                                                                                }
                                                                              }
                                                                            };
                                                                            tmp1 = union(tmp1, array(recConcat({
                                                                                      "_c1_b": (recDot(stratify0$0, "_c1.b"))
                                                                                    }, {
                                                                                    })));
                                                                          }
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
                                                                    iterColl(array((!natLe(count(stratify1$0), {
                                                                              "$nat": (0.0)
                                                                            }))), (function (tsel$1) {
                                                                                                                                                if (tsel$1) {
                                                                          tmp1 = union(tmp1, array(array(tsel$1)));
                                                                        } else {
                                                                          tmp1 = union(tmp1, array(array()));
                                                                        }
                                                                      }));;
                                                                    stratify2$0 = tmp1;
                                                                  }
                                                                };
                                                                tapp$6 = nth(flatten(stratify2$0), {
                                                                      "$nat": (0.0)
                                                                    });
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    };
                                                    if (either(tapp$6)) {
                                                      {
                                                        let teitherL$0 = getLeft(tapp$6);
                                                        {
                                                          let tapp$5;
                                                          {
                                                            ;
                                                            {
                                                              let stratify0$2;
                                                              {
                                                                ;
                                                                {
                                                                  let tapp$3;
                                                                  {
                                                                    ;
                                                                    {
                                                                      let tapp$2;
                                                                      {
                                                                        ;
                                                                        {
                                                                          let stratify0$1;
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
                                                                                    stratify0$1 = teitherL$0;
                                                                                  }
                                                                                } else {
                                                                                  {
                                                                                    let teitherR$0 = getRight(tapp$1);
                                                                                    stratify0$1 = {
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
                                                                                  let tmp1 = distinct(array());
                                                                                  {
                                                                                    ;
                                                                                    iterColl(union(array(recDot(recConcat({
                                                                                                "_c1_b": (recDot(stratify0$1, "_c0.a"))
                                                                                              }, {
                                                                                              }), "_c1_b")), array()), (function (tsel$0) {
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
                                                                                    stratify1$0 = tmp1;
                                                                                  }
                                                                                };
                                                                                tapp$2 = nth(flatten(stratify1$0), {
                                                                                      "$nat": (0.0)
                                                                                    });
                                                                              }
                                                                            }
                                                                          }
                                                                        };
                                                                        if (either(tapp$2)) {
                                                                          {
                                                                            let teitherL$0 = getLeft(tapp$2);
                                                                            tapp$3 = teitherL$0;
                                                                          }
                                                                        } else {
                                                                          {
                                                                            let teitherR$0 = getRight(tapp$2);
                                                                            tapp$3 = {
                                                                                "$left": (null)
                                                                              };
                                                                          }
                                                                        }
                                                                      }
                                                                    };
                                                                    if (either(tapp$3)) {
                                                                      {
                                                                        let teitherL$0 = getLeft(tapp$3);
                                                                        stratify0$2 = false;
                                                                      }
                                                                    } else {
                                                                      {
                                                                        let teitherR$0 = getRight(tapp$3);
                                                                        stratify0$2 = true;
                                                                      }
                                                                    }
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
                                                                        iterColl(array(stratify0$2), (function (tsel$0) {
                                                                                                                                                        if (tsel$0) {
                                                                              tmp1 = union(tmp1, array(array(tsel$0)));
                                                                            } else {
                                                                              tmp1 = union(tmp1, array(array()));
                                                                            }
                                                                          }));;
                                                                        stratify1$0 = tmp1;
                                                                      }
                                                                    };
                                                                    tapp$5 = nth(flatten(stratify1$0), {
                                                                          "$nat": (0.0)
                                                                        });
                                                                  }
                                                                }
                                                              }
                                                            };
                                                            if (either(tapp$5)) {
                                                              {
                                                                let teitherL$0 = getLeft(tapp$5);
                                                                tapp$0 = {
                                                                    "$right": (null)
                                                                  };
                                                              }
                                                            } else {
                                                              {
                                                                let teitherR$0 = getRight(tapp$5);
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
                                                                        {
                                                                          let stratify1$1;
                                                                          {
                                                                            ;
                                                                            {
                                                                              let tmp1 = distinct(array());
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
                                                                                              let stratify2$0;
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
                                                                                                        stratify2$0 = teitherL$0;
                                                                                                      }
                                                                                                    } else {
                                                                                                      {
                                                                                                        let teitherR$0 = getRight(tapp$1);
                                                                                                        stratify2$0 = {
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
                                                                                                  let stratify3;
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
                                                                                                            stratify3 = teitherL$0;
                                                                                                          }
                                                                                                        } else {
                                                                                                          {
                                                                                                            let teitherR$0 = getRight(tapp$1);
                                                                                                            stratify3 = {
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
                                                                                                    tmp1 = union(tmp1, array(recConcat({
                                                                                                              "_c1.a": (recDot(stratify1$0, "table1.a"))
                                                                                                            }, recConcat({
                                                                                                                "_c1.b": (recDot(stratify2$0, "table1.b"))
                                                                                                              }, recConcat({
                                                                                                                  "_c1.c": (recDot(stratify3, "table1.c"))
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
                                                                                stratify1$1 = tmp1;
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
                                                                                    iterColl(stratify1$1, (function (tmap$0) {
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
                                                                                                            })
                                                                                                          };
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                };
                                                                                                tmp1 = union(tmp1, array(recConcat({
                                                                                                          "_c1_b": (recDot(stratify1$0, "_c1.b"))
                                                                                                        }, {
                                                                                                        })));
                                                                                              }
                                                                                            }
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
                                                                                        iterColl(array(contains(recConcat({
                                                                                                  "_c1_b": (recDot(stratify0$0, "_c0.a"))
                                                                                                }, {
                                                                                                }), stratify2$0)), (function (tsel$0) {
                                                                                                                                                                                        if (tsel$0) {
                                                                                              tmp1 = union(tmp1, array(array(tsel$0)));
                                                                                            } else {
                                                                                              tmp1 = union(tmp1, array(array()));
                                                                                            }
                                                                                          }));;
                                                                                        stratify3 = tmp1;
                                                                                      }
                                                                                    };
                                                                                    tapp$4 = nth(flatten(stratify3), {
                                                                                          "$nat": (0.0)
                                                                                        });
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    };
                                                                    if (either(tapp$4)) {
                                                                      {
                                                                        let teitherL$0 = getLeft(tapp$4);
                                                                        tapp$0 = {
                                                                            "$left": (true)
                                                                          };
                                                                      }
                                                                    } else {
                                                                      {
                                                                        let teitherR$0 = getRight(tapp$4);
                                                                        {
                                                                          let tapp$3;
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
                                                                                                      let stratify2$0;
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
                                                                                                                stratify2$0 = teitherL$0;
                                                                                                              }
                                                                                                            } else {
                                                                                                              {
                                                                                                                let teitherR$0 = getRight(tapp$1);
                                                                                                                stratify2$0 = {
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
                                                                                                        tmp1 = union(tmp1, array(recConcat({
                                                                                                                  "_c1.a": (recDot(stratify0$0, "table1.a"))
                                                                                                                }, recConcat({
                                                                                                                    "_c1.b": (recDot(stratify1$0, "table1.b"))
                                                                                                                  }, recConcat({
                                                                                                                      "_c1.c": (recDot(stratify2$0, "table1.c"))
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
                                                                                  let stratify1$0;
                                                                                  {
                                                                                    ;
                                                                                    {
                                                                                      let tmp1 = distinct(array());
                                                                                      {
                                                                                        ;
                                                                                        iterColl(stratify0$3, (function (tmap$0) {
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
                                                                                                                })
                                                                                                              };
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    };
                                                                                                    tmp1 = union(tmp1, array(recConcat({
                                                                                                              "_c1_b": (recDot(stratify0$0, "_c1.b"))
                                                                                                            }, {
                                                                                                            })));
                                                                                                  }
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
                                                                                            iterColl(stratify1$0, (function (tsel$0) {
                                                                                                                                                                                                {
                                                                                                  let stratify0$2;
                                                                                                  {
                                                                                                    ;
                                                                                                    {
                                                                                                      let tapp$2;
                                                                                                      {
                                                                                                        ;
                                                                                                        {
                                                                                                          let tapp$1;
                                                                                                          {
                                                                                                            ;
                                                                                                            {
                                                                                                              let stratify0$1;
                                                                                                              {
                                                                                                                ;
                                                                                                                {
                                                                                                                  let tmp2 = distinct(array());
                                                                                                                  {
                                                                                                                    ;
                                                                                                                    iterColl(union(array(recDot(tsel$0, "_c1_b")), array()), (function (tsel$1) {
                                                                                                                                                                                                                                                {
                                                                                                                          let stratify0$0;
                                                                                                                          {
                                                                                                                            ;
                                                                                                                            if (either(tsel$1)) {
                                                                                                                              {
                                                                                                                                let teitherL$0 = getLeft(tsel$1);
                                                                                                                                stratify0$0 = false;
                                                                                                                              }
                                                                                                                            } else {
                                                                                                                              {
                                                                                                                                let teitherR$0 = getRight(tsel$1);
                                                                                                                                stratify0$0 = true;
                                                                                                                              }
                                                                                                                            };
                                                                                                                            if (stratify0$0) {
                                                                                                                              tmp2 = union(tmp2, array(array(tsel$1)));
                                                                                                                            } else {
                                                                                                                              tmp2 = union(tmp2, array(array()));
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }));;
                                                                                                                    stratify0$1 = tmp2;
                                                                                                                  }
                                                                                                                };
                                                                                                                tapp$1 = nth(flatten(stratify0$1), {
                                                                                                                      "$nat": (0.0)
                                                                                                                    });
                                                                                                              }
                                                                                                            };
                                                                                                            if (either(tapp$1)) {
                                                                                                              {
                                                                                                                let teitherL$0 = getLeft(tapp$1);
                                                                                                                tapp$2 = teitherL$0;
                                                                                                              }
                                                                                                            } else {
                                                                                                              {
                                                                                                                let teitherR$0 = getRight(tapp$1);
                                                                                                                tapp$2 = {
                                                                                                                    "$left": (null)
                                                                                                                  };
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        };
                                                                                                        if (either(tapp$2)) {
                                                                                                          {
                                                                                                            let teitherL$0 = getLeft(tapp$2);
                                                                                                            stratify0$2 = false;
                                                                                                          }
                                                                                                        } else {
                                                                                                          {
                                                                                                            let teitherR$0 = getRight(tapp$2);
                                                                                                            stratify0$2 = true;
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    };
                                                                                                    if (stratify0$2) {
                                                                                                      tmp1 = union(tmp1, array(array(tsel$0)));
                                                                                                    } else {
                                                                                                      tmp1 = union(tmp1, array(array()));
                                                                                                    }
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
                                                                                                iterColl(array((!natLe(count(flatten(stratify2$0)), {
                                                                                                          "$nat": (0.0)
                                                                                                        }))), (function (tsel$0) {
                                                                                                                                                                                                        if (tsel$0) {
                                                                                                      tmp1 = union(tmp1, array(array(tsel$0)));
                                                                                                    } else {
                                                                                                      tmp1 = union(tmp1, array(array()));
                                                                                                    }
                                                                                                  }));;
                                                                                                stratify3 = tmp1;
                                                                                              }
                                                                                            };
                                                                                            tapp$3 = nth(flatten(stratify3), {
                                                                                                  "$nat": (0.0)
                                                                                                });
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            };
                                                                            if (either(tapp$3)) {
                                                                              {
                                                                                let teitherL$0 = getLeft(tapp$3);
                                                                                tapp$0 = {
                                                                                    "$right": (null)
                                                                                  };
                                                                              }
                                                                            } else {
                                                                              {
                                                                                let teitherR$0 = getRight(tapp$3);
                                                                                tapp$0 = {
                                                                                    "$left": (false)
                                                                                  };
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
                                                    } else {
                                                      {
                                                        let teitherR$0 = getRight(tapp$6);
                                                        tapp$0 = {
                                                            "$left": (false)
                                                          };
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
                                stratify2 = tmp0;
                              }
                            };
                            {
                              let tmp0 = distinct(array());
                              {
                                ;
                                iterColl(flatten(stratify2), (function (tmap$0) {
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
                                                  let stratify2$1;
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
                                                                  let stratify2$0;
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
                                                                            stratify2$0 = teitherL$0;
                                                                          }
                                                                        } else {
                                                                          {
                                                                            let teitherR$0 = getRight(tapp$0);
                                                                            stratify2$0 = {
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
                                                                    tmp1 = union(tmp1, array(recDot(stratify2$0, "_c0.b")));
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }));;
                                                        stratify2$1 = tmp1;
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
                                                            iterColl(stratify2$1, (function (tsel$0) {
                                                                                                                                {
                                                                  let stratify2$0;
                                                                  {
                                                                    ;
                                                                    if (either(tsel$0)) {
                                                                      {
                                                                        let teitherL$0 = getLeft(tsel$0);
                                                                        stratify2$0 = true;
                                                                      }
                                                                    } else {
                                                                      {
                                                                        let teitherR$0 = getRight(tsel$0);
                                                                        stratify2$0 = false;
                                                                      }
                                                                    };
                                                                    if (stratify2$0) {
                                                                      tmp1 = union(tmp1, array(array(tsel$0)));
                                                                    } else {
                                                                      tmp1 = union(tmp1, array(array()));
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
                                                                iterColl(flatten(stratify3), (function (tmap$1) {
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
                                                                stratify4 = tmp1;
                                                              }
                                                            };
                                                            tmp0 = union(tmp0, array(recConcat({
                                                                      "_c0_a": (recDot(stratify0$0, "_c0.a"))
                                                                    }, recConcat({
                                                                        "_c0_c": (recDot(stratify1$0, "_c0.c"))
                                                                      }, recConcat({
                                                                          "sumb": ({
                                                                            "$left": (natSum(stratify4))
                                                                          })
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
